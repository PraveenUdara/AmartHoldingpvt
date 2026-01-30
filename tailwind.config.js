/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      height: {
        "hero-mobile": "56vh",
        "hero-tablet": "60vh",
        "hero-desktop": "72vh",
      },
      minHeight: {
        "hero-mobile": "320px",
        "hero-tablet": "420px",
        "hero-desktop": "520px",
      },
    },
  },
  plugins: [],
};
