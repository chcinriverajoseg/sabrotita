/* ** @type {import('tailwindcss').Config} /
export default {
  content: ["./index.html", "./src/**.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // 👇 Fade-in (aparece suave)
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // 👇 Slide-up (sube desde abajo)
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        /* 👇 Shake (temblor)
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-5px)" },
          "40%, 80%": { transform: "translateX(5px)" },
        },
        /* 👇 Bounce + Pop (ya lo tienes)
        bouncePop: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(0.9)" },
          "75%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        shake: "shake 0.6s ease-in-out",
        bouncePop: "bouncePop 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",   // Rojo apetitoso
        secondary: "#ffb703", // Amarillo vibrante
        dark: "#1d3557",      // Azul oscuro elegante
        light: "#f1faee",     // Fondo claro
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        gradient: "gradient-x 6s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
