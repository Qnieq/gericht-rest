import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_DATABASE_API_KEY: process.env.VITE_DATABASE_API_KEY ,
    VITE_DATABASE_AUTH_DOMAIN: process.env.VITE_DATABASE_AUTH_DOMAIN,
    VITE_DATABASE_URL: process.env.VITE_DATABASE_URL,
    VITE_DATABASE_PROJECT_ID: process.env.VITE_DATABASE_PROJECT_ID,
    VITE_DATABASE_STORAGE_BUCKET: process.env.VITE_DATABASE_STORAGE_BUCKET,
    VITE_DATABASE_MESSAGERING_SENDER_ID: process.env.VITE_DATABASE_MESSAGERING_SENDER_ID,
    VITE_DATABASE_APP_ID: process.env.VITE_DATABASE_APP_ID,
    VITE_DATABASE_MEASUREMENT_ID: process.env.VITE_DATABASE_MEASUREMENT_ID
  },
})
