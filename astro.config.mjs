// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyleundefined.dev',
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'synthwave-84',
    },
    smartypants: false,
  },
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
      name: "Kyle Undefined.dev",
      short_name: "Kyle Undefined",
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
});