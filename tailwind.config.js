/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-cover": "url('/assets/img/cover-img.jpg')",
      },
      fontFamily: {
        custom: ["Helvetica Neue", "sans-serif", "Helvetica"],
      },
    },
  },
  plugins: [require("tailwindcss-scrollbar")],
};
