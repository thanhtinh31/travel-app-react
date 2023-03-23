/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "maintext": "#192a56",
        "subtext":"#455c7d",
        "darkmaintext": "#0284c7",
        "darksubtext":"#3a99c8",
        "mainbg": "#0284c7",
      },
    },
  },
  plugins: [],
};
