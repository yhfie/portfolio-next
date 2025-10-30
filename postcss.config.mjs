const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    base: false,
    darkTheme: "dark",
  },
};


export default config;
