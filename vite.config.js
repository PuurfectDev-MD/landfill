import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'
import { qrcode } from 'vite-plugin-qrcode'

export default defineConfig({
  plugins: [
    tailwindcss(),
    qrcode()
  ],

  server: {  
    host: true 
  }
  ,
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