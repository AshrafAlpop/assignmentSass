/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F29724",
        secondary: "#21BA75",
      },
      fontFamily: {
        // Pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

