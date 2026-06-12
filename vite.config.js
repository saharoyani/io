import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deployed to GitHub Pages at https://saharoyani.github.io/io/.
  // If you move to a custom domain or a user page, change this to '/'.
  base: '/io/',
})
