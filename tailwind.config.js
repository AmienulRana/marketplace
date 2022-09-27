module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-400": "#29A867",
        "green-500": "#29A867",
        "orange-500": "#FF7158",
        "blue-500": "#0C0D36",
        "brown-500": "#533529",
        "grey-400": "#F3F3F3",
        "grey-500": "#F4F4F4",
        "grey-600": "#979797",
        "grey-700": "#525252",
      },
      spacing: {
        "18px": "76px",
        "34px": "134px",
        "155px": "155px",
        "85px": "85px",
        "400px": "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
