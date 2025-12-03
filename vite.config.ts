import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');

    return {
      // REQUIRED FOR GITHUB PAGES
      base: "/Prompt-Master/",   // <-- your repo name here

      server: {
        port: 3000,
        host: '0.0.0.0',
      },

      plugins: [react()],

      // YOUR GEMINI API KEY INJECTION (kept exactly as you wrote)
      define: {
        'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
      },

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
