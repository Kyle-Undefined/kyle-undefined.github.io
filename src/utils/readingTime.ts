const WORDS_PER_MINUTE = 200;

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[\[[^\]]+]]/g, ' ')
    .replace(/\[\[[^\]]+]]/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[>#*_~`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getReadingTimeMinutes(markdown: string, wordsPerMinute = WORDS_PER_MINUTE) {
  const plainText = stripMarkdown(markdown);
  const words = plainText ? plainText.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getReadingTimeLabel(markdown: string, wordsPerMinute = WORDS_PER_MINUTE) {
  const minutes = getReadingTimeMinutes(markdown, wordsPerMinute);
  return `${minutes} min read`;
}
