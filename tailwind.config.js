/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        6: 'repeat(6, 1fr)',
      },
    },
  },
  plugins: [],
};
