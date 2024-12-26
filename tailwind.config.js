/** @type {import('tailwindcss').Config} */
import colors from './src/colors'; 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        status: colors.status,
        neutral: colors.neutral,
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'], 
        nunito:['nunito', 'serif'],
        roboto :['roboto', 'sans-serif'],
        // inter: ['Inter', 'sans-serif'], 
        // geologica: ['Geologica', 'sans-serif'], 
        // montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
