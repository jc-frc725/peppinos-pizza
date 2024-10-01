import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx",
    })
  ],
  server: { 
    watch: {
      usePolling: true // needed for HMR to work in WSL2 - may increase CPU usage
    }  
  },
  css: {
    preprocessorOptions : {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
