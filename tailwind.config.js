/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'tt-hoves-pro': ['TT Hoves Pro', 'sans-serif'],
      },
      animation: {
        'fade-in-once': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    plugins: [],
  }
}
