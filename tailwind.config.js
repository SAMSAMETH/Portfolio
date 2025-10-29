/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-out forwards",
        "gradient-x": "gradient-x 4s ease infinite"
      },
    },
    fontFamily:{
      'hero-font':'Sriracha',
      'Logo-font':'DM Serif Display',
      'body-font':'Libertinus Serif Display',
      'Header-font':'Dancing Script'
    }
  },
  plugins: [],
}

