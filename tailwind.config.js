/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
};
