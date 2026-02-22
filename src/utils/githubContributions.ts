const DAY_MS = 24 * 60 * 60 * 1000;

export interface GitHubContributionCell {
  date: string;
  level: number;
  count: number;
}

export interface GitHubContributionsData {
  username: string;
  summary: string;
  totalContributions: number;
  weeks: (GitHubContributionCell | null)[][];
  monthLabels: string[];
}

interface ParsedCell extends GitHubContributionCell {
  weekday: number;
  timestamp: number;
}

const contributionsCache = new Map<string, Promise<GitHubContributionsData | null>>();

export async function getGitHubContributions(username: string): Promise<GitHubContributionsData | null> {
  const trimmedUsername = username.trim();
  if (!trimmedUsername) {
    return null;
  }

  const cacheKey = trimmedUsername.toLowerCase();
  if (!contributionsCache.has(cacheKey)) {
    contributionsCache.set(cacheKey, fetchAndParseContributions(trimmedUsername));
  }

  return contributionsCache.get(cacheKey) ?? null;
}

async function fetchAndParseContributions(username: string): Promise<GitHubContributionsData | null> {
  try {
    const response = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: {
        "User-Agent": "kyleundefined.dev",
        Accept: "text/html",
      },
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    return parseContributionsHtml(html, username);
  } catch {
    return null;
  }
}

function parseContributionsHtml(html: string, username: string): GitHubContributionsData | null {
  const summary = extractSummary(html);
  const tooltipById = extractTooltips(html);
  const dayCells = extractDayCells(html, tooltipById);

  if (dayCells.length === 0) {
    return null;
  }

  dayCells.sort((a, b) => a.timestamp - b.timestamp);
  const weeks = buildWeeks(dayCells);
  const monthLabels = buildMonthLabels(weeks);

  return {
    username,
    summary,
    totalContributions: extractTotalContributions(summary, dayCells),
    weeks,
    monthLabels,
  };
}

function extractSummary(html: string): string {
  const summaryMatch = html.match(/id="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/i);
  if (!summaryMatch) {
    return "GitHub contributions in the last year";
  }

  return normalizeWhitespace(summaryMatch[1].replace(/<[^>]+>/g, " "));
}

function extractTooltips(html: string): Map<string, string> {
  const tooltipPattern = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/gi;
  const tooltipById = new Map<string, string>();

  let match = tooltipPattern.exec(html);
  while (match) {
    tooltipById.set(match[1], normalizeWhitespace(match[2].replace(/<[^>]+>/g, " ")));
    match = tooltipPattern.exec(html);
  }

  return tooltipById;
}

function extractDayCells(html: string, tooltipById: Map<string, string>): ParsedCell[] {
  const dayCellPattern = /<td\b([^>]*\bdata-date="[^"]+"[^>]*)><\/td>/gi;
  const dayCells: ParsedCell[] = [];

  let match = dayCellPattern.exec(html);
  while (match) {
    const attrs = match[1];
    if (!attrs.includes("ContributionCalendar-day")) {
      match = dayCellPattern.exec(html);
      continue;
    }

    const date = getAttribute(attrs, "data-date");
    const levelRaw = getAttribute(attrs, "data-level");
    const id = getAttribute(attrs, "id");

    if (!date || !levelRaw) {
      match = dayCellPattern.exec(html);
      continue;
    }

    const level = Number.parseInt(levelRaw, 10);
    if (!Number.isFinite(level)) {
      match = dayCellPattern.exec(html);
      continue;
    }

    const dateObj = new Date(`${date}T00:00:00Z`);
    if (Number.isNaN(dateObj.getTime())) {
      match = dayCellPattern.exec(html);
      continue;
    }

    const tooltipText = id ? tooltipById.get(id) ?? "" : "";
    dayCells.push({
      date,
      level,
      count: extractContributionCount(tooltipText),
      weekday: dateObj.getUTCDay(),
      timestamp: dateObj.getTime(),
    });

    match = dayCellPattern.exec(html);
  }

  return dayCells;
}

function buildWeeks(dayCells: ParsedCell[]): (GitHubContributionCell | null)[][] {
  const firstDate = new Date(dayCells[0].timestamp);
  const firstSunday = new Date(firstDate);
  firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());

  const weeks: (GitHubContributionCell | null)[][] = [];
  let maxWeekIndex = 0;

  for (const cell of dayCells) {
    const weekIndex = Math.floor((cell.timestamp - firstSunday.getTime()) / (7 * DAY_MS));
    maxWeekIndex = Math.max(maxWeekIndex, weekIndex);

    if (!weeks[weekIndex]) {
      weeks[weekIndex] = Array.from({ length: 7 }, () => null);
    }

    weeks[weekIndex][cell.weekday] = {
      date: cell.date,
      level: cell.level,
      count: cell.count,
    };
  }

  for (let weekIndex = 0; weekIndex <= maxWeekIndex; weekIndex += 1) {
    if (!weeks[weekIndex]) {
      weeks[weekIndex] = Array.from({ length: 7 }, () => null);
    }
  }

  return weeks;
}

function buildMonthLabels(weeks: (GitHubContributionCell | null)[][]): string[] {
  const monthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
  });

  const labels = Array.from({ length: weeks.length }, () => "");
  let previousMonth = "";

  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex += 1) {
    const firstFilledCell = weeks[weekIndex].find((cell): cell is GitHubContributionCell => cell !== null);
    if (!firstFilledCell) {
      continue;
    }

    const weekDate = new Date(`${firstFilledCell.date}T00:00:00Z`);
    const month = monthFormatter.format(weekDate);

    if (weekIndex === 0) {
      labels[weekIndex] = month;
      previousMonth = month;
      continue;
    }

    if (weekDate.getUTCDate() <= 7 && month !== previousMonth) {
      labels[weekIndex] = month;
      previousMonth = month;
    }
  }

  return labels;
}

function extractTotalContributions(summary: string, dayCells: ParsedCell[]): number {
  const totalMatch = summary.match(/([\d,]+)\s+contributions?/i);
  if (totalMatch) {
    return Number.parseInt(totalMatch[1].replaceAll(",", ""), 10) || 0;
  }

  return dayCells.reduce((total, cell) => total + cell.count, 0);
}

function extractContributionCount(text: string): number {
  if (!text || /No contributions/i.test(text)) {
    return 0;
  }

  const countMatch = text.match(/([\d,]+)\s+contributions?/i);
  if (!countMatch) {
    return 0;
  }

  return Number.parseInt(countMatch[1].replaceAll(",", ""), 10) || 0;
}

function getAttribute(attrs: string, name: string): string | null {
  const attrRegex = new RegExp(`${escapeRegExp(name)}="([^"]+)"`, "i");
  return attrs.match(attrRegex)?.[1] ?? null;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
