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
        projects: resolve(__dirname, "pages/project.html"),
        been: resolve(__dirname, "pages/been.html"),
        me: resolve(__dirname,"pages/me.html")
  
      }
    }
  }
})