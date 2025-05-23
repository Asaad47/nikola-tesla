// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://asaad47.github.io', // Replace with your GitHub username
  base: '/nikola-tesla', // Replace with your repository name
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  adapter: vercel()
});