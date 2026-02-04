import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { site, i18n } from 'astro:config/client';

const blog = (await getCollection('blog')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
const parser = new MarkdownIt();

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
            content: sanitizeHtml(parser.render(post.body.replaceAll(/!\[\[([^\]]+)\]\]/g, '[Embedded Image]').replaceAll(/<iframe[^>]*src=["']([^"']+)["'][^>]*>.*?<\/iframe>/gi, '[Note: Embedded content from $1]'))),
        })),
    });
}