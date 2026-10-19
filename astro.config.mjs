// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// Stránky jsou statické; serverově běží jen přihlášení do administrace (/oauth).
export default defineConfig({
  site: 'https://www.vladkahorakova.cz',
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
