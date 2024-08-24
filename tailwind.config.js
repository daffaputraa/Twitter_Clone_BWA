/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        bluet: "#1880E8",
        paragraph: "#5E6368",
        dark: "#010003",
        gray_300: "#1E1E1E",
        gray_200: "#121316",
      },
      boxShadow: {
        primary: "0px 10px 20px 0px rgba(24, 128, 232, 0.40)",
      },
    },
  },
  plugins: [],
};
