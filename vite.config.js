import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub Pages repo name.
// Change '/salman-design-demo/' to your actual repo name if different.
export default defineConfig({
  plugins: [react()],
  base: '/salman-design-demo/',
})

