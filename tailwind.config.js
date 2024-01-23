/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      keyframes: {
        rainbow: {
          "0%": {
            backgroundPosition: "0 50%",
          },
          "50%": {
            backgroundPosition: "100 50%",
          },
          "100%": {
            backgroundPosition: "200 50%",
          },
        },
      },
      animation: {
        rainbow: "rainbow 8s linear infinite",
      },
    },
  },
};
