import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@threeui': path.resolve(import.meta.dirname!, '../threeui/src'),
    },
  },
  base: '/advocate-not-adversary/',
  server: { port: 5174 },
})
