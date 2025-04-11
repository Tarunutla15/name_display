import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // ✅ important for Netlify to find assets
  build: {
    outDir: 'dist', // ✅ make sure it goes to root/dist
  },
  plugins: [react(), tailwindcss()],
})
