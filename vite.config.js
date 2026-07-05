import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain served at the root, so base is '/'.
  base: '/',
  server: {
    allowedHosts: ['friendshiprentalservice.com.np'],
  },
})
