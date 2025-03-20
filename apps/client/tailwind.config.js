/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Look for content in the src directory with .html and .ts extensions
    "../../node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}

