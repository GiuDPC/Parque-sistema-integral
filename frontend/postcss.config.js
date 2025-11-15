// frontend/postcss.config.js

export default {
  plugins: {
    // ESTA LÍNEA ES LA CORRECCIÓN. Usamos el paquete que te pide el error
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
}