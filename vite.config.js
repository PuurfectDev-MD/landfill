import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,"index.html"),
        projects: resolve(__dirname, "pages\project.html"),
        learned: resolve(__dirname, "pages\learned.html"),
        me: resolve(__dirname,"pages\me.html")
  
      }
    }
  }
})