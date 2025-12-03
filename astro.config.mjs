import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Ganti ini dengan domain aslimu nanti kalau sudah upload
  // Contoh: 'https://beasiswayes.id'
  site: 'https://contoh-website-kamu.netlify.app', 
  
  integrations: [tailwind()],
});