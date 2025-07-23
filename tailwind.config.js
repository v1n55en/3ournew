/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#599d39",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require("tailwindcss-animate"),
  ],
=======
  plugins: [],
>>>>>>> 9e467b81ce231c2b9f5641b8d1ff848544c7495f
}