import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
  },
  preview: {
    port: 4270,
  },
  hmr:true, // permite intercambiar, añadir o eliminar módulos mientras una aplicación está ejecutando sin necesidad de recargar la página.


  build: {
    incremental: true,

    babel: { 
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }, 
  
    cache: true,
    minity: true, 
    mode: "production", 
    chunks: true,
    moduleBundling: true, 
    prerenderPaths: ["/"],
    modulePreload: true, 
    outDir: "build",
    devCode: true,
    debug: true,
  }  
});










