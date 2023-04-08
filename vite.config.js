import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://edkillah.github.io/react-rick-and-morty-apit/",
  plugins: [react()],
})
