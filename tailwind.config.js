/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  daisyui: {
    themes: ["corporate", "business"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
