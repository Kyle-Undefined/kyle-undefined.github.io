// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import favicons from 'astro-favicons';
import wikiImagePlugin from './src/plugins/wikiImagePlugin.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyleundefined.dev',
  output: 'static',
  markdown: {
    remarkPlugins: [wikiImagePlugin],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'synthwave-84',
    },
    smartypants: false,
  },
  trailingSlash: "never",
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    favicons({
      input: {
        favicons: [
          "public/favicon.svg",
        ],
      },
      name: "kyleundefined.dev",
      short_name: "KyleUndefined",
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
        yandex: true,
      },
      pixel_art: true,
      manifestMaskable: false,
      output: {
        images: true,
        files: true,
        html: true,
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  }
});