// ...existing code...
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// ...existing code...
export default defineConfig({
  plugins: [react()],
  // ensure all React imports resolve to the same copy in this package
  resolve: {
    alias: [
      { find: 'react', replacement: fileURLToPath(new URL('./node_modules/react', import.meta.url)) },
      { find: 'react-dom', replacement: fileURLToPath(new URL('./node_modules/react-dom', import.meta.url)) }
    ]
  }
})
// ...existing code...