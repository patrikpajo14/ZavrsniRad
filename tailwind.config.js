/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-red": "#F61726",
        "primary-lightred": "#FAF8F8",
      },
      boxShadow: {
        main: "0 5px 15px 5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
