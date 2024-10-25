/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { mainBg: "rgb(42, 94, 84)" },
    },
  },
  plugins: [],
};
