/** @type {import('tailwindcss').Config} */
module.exports = {
  // Incluye todas las rutas relevantes para Expo Router (app, components, etc.)
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
