/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Azul principal (usado en botones y enlaces)
          dark: "#2563EB", // Versión más oscura del azul principal
          light: "#60A5FA", // Versión más clara del azul principal
        },
        secondary: {
          DEFAULT: "#10B981", // Verde para elementos secundarios
          dark: "#059669", // Verde oscuro
          light: "#34D399", // Verde claro
        },
        background: {
          DEFAULT: "#F3F4F6", // Gris muy claro para el fondo general
          white: "#FFFFFF", // Blanco para tarjetas y secciones
          footer: "#1f2937", // Fondo Footer
        },
        text: {
          DEFAULT: "#1F2937", // Gris muy oscuro para texto principal
          muted: "#6B7280", // Gris para texto secundario
        },
        accent: {
          DEFAULT: "#F59E0B", // Amarillo/naranja para acentos
          dark: "#D97706", // Versión más oscura del acento
        },
        error: "#EF4444", // Rojo para errores y notificaciones importantes
      },
    },
  },
  plugins: [],
};
