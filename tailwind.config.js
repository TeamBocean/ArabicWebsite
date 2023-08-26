/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",  './node_modules/tw-elements/dist/js/**/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
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
