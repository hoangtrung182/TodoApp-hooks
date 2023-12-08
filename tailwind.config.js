const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-cover": "url('/assets/img/cover-dev.jpg')",
      },
      fontFamily: {
        custom: ["Helvetica Neue", "sans-serif", "Helvetica"],
      },
    },
  },
  plugins: [require("tailwindcss-scrollbar")],
});

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "img-cover": "url('/assets/img/cover-img.jpg')",
//       },
//       fontFamily: {
//         custom: ["Helvetica Neue", "sans-serif", "Helvetica"],
//       },
//     },
//   },
//   plugins: [require("tailwindcss-scrollbar")],
// };
