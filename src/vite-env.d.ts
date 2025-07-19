import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/novo-horizonte-web-79/', 
  plugins: [react()],
})