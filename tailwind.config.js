/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      }
    }
  },
  plugins: [],
  darkMode: 'selector'
};
