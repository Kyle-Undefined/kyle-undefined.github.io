import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { site, i18n } from 'astro:config/client';

const blog = (await getCollection('blog')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
const parser = new MarkdownIt();
const wikiImagePattern = /!\[\[([^\]]+)\]\]/g;
const iframePattern = /<iframe[^>]*src=["']([^"']+)["'][^>]*>.*?<\/iframe>/gi;

function isFullyQualifiedUrl(value) {
    try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    }
    catch {
        return false;
    }
}

function normalizeRssContent(markdown) {
    const withWikiEmbedsHandled = markdown.replaceAll(wikiImagePattern, (_, rawTarget) => {
        const [target] = rawTarget.split('|');
        const cleanedTarget = target.trim();

        if (!isFullyQualifiedUrl(cleanedTarget)) {
            return '[Embedded Image]';
        }

        return `![Embedded Image](${cleanedTarget})`;
    });

    return withWikiEmbedsHandled.replaceAll(iframePattern, '[Note: Embedded content from $1]');
}

function sanitizeRssHtml(html) {
    return sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat('img'),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt', 'title'],
        },
        transformTags: {
            img: (_, attribs) => {
                const src = attribs.src?.trim();

                if (!src || !isFullyQualifiedUrl(src)) {
                    return { tagName: 'span', text: '[Embedded Image]' };
                }

                return {
                    tagName: 'img',
                    attribs: {
                        src,
                        alt: attribs.alt || 'Embedded Image',
                        ...(attribs.title ? { title: attribs.title } : {}),
                    },
                };
            },
        },
    });
}

export async function GET(context) {
    return rss({
        title: 'kyleundefined.dev',
        description: 'Just a dude who enjoys writing code and learning;',
        trailingSlash: false,
        site: context.site,
        customData: ([
            `<language>${i18n.defaultLocale}</language>`,
            `<atom:link href="${new URL('rss.xml', site).href}" rel="self" type="application/rss+xml" />`,
        ]).join(''),
        xmlns: {
            atom: 'http://www.w3.org/2005/Atom',
            content: 'http://purl.org/rss/1.0/modules/content/'
        },
        items: blog.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
            pubDate: post.data.pubDate,
            content: sanitizeRssHtml(parser.render(normalizeRssContent(post.body))),
        })),
    });
}
