/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        redmd: "0 4px rgb(255, 0, 0)",
        redsm: "0 2px rgb(255, 0, 0)",
      },
      colors: {
        primary: "rgb(0,151,156)",
        main: "#ECF1F1",
        maindark: "#d4d9d9",
        mainlight: "#eef2f2",
        primaryhalf: "rgba(0,151,156,0.8)",
        primarydark: "#005C5F",
        primarymute: "#77B9BB",
      },
    },
  },
  plugins: [],
};
