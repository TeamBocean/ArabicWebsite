/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],

      },
      
      
      colors: {
        'green':'#00574E',
        'purple': '#3E002F',
        'cream': '#FEFAF1',

      },
    },
  },
  plugins: [flowbitePlugin],
}
