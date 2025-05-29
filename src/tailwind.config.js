/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Enables Tailwind to scan your files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // example: custom primary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // custom font
      },
    },
  },
  plugins: [],
};
