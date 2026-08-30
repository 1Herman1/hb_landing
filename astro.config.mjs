import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://1herman1.github.io',
  base: '/hb_landing/',
  vite: {
    plugins: [tailwindcss()],
  },
});
