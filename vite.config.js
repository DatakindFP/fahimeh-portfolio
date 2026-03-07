import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DatakindFP/',  // ← CHANGE THIS to your actual repo name
})
