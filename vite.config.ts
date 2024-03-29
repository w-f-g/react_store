import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = path.resolve

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
