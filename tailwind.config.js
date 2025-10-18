// tailwind.config.js

module.exports = {
  content: [
    // ... tus archivos de contenido
  ],
  theme: {
    extend: {
      // 1. Definir los keyframes (los "pasos" de la animación)
      keyframes: {
        // Nombre del keyframe: 'fadeInDown'
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)", // Empieza 20px arriba
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)", // Termina en su posición normal
          },
        },
      },
      // 2. Definir la animación (cómo usar el keyframe)
      animation: {
        // Nombre de la clase de Tailwind: 'fadeInDown'
        // Valor: 'nombre-del-keyframe' 'duracion' 'funcion-de-tiempo' 'veces-que-se-repite'
        fadeInDown: "fadeInDown 0.5s ease-out 1",
      },
    },
  },
  plugins: [
    // ... tus plugins
  ],
};
