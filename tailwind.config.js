/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.js",
    "./src/**/**/*.js",
    "./src/**/**/**/*.js",
    "./src/**/**/**/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1030px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1140px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [],
}