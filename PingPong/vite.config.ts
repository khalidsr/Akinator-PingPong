import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Akinator-PingPong/",
  plugins: [react()],
  server:{
    host: true,
    strictPort: true,
    // port:80
  }
})
