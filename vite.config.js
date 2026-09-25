import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Use the port assigned by the launcher when there is one (avoids clashes between parallel dev servers)
    port: Number(process.env.PORT) || 3000,
    host: '0.0.0.0',
    cors: true,
    allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1', '0.0.0.0']
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    cors: true,
    allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1', '0.0.0.0']
  }
})
