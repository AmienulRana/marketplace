module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-green-500": "#243c5a",
        "orange-500": "#FF7158",
        "blue-500": "#0C0D36",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
