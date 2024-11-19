/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {},
//   },
//   plugins: [],
// }




// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       animation: {
//         first: "moveVertical 30s ease infinite",
//         second: "moveInCircle 20s reverse infinite",
//         third: "moveInCircle 40s linear infinite",
//         fourth: "moveHorizontal 40s ease infinite",
//         fifth: "moveInCircle 20s ease infinite",
//       },
//       keyframes: {
//         moveHorizontal: {
//           "0%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//           "50%": {
//             transform: "translateX(50%) translateY(10%)",
//           },
//           "100%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//         },
//         moveInCircle: {
//           "0%": {
//             transform: "rotate(0deg)",
//           },
//           "50%": {
//             transform: "rotate(180deg)",
//           },
//           "100%": {
//             transform: "rotate(360deg)",
//           },
//         },
//         moveVertical: {
//           "0%": {
//             transform: "translateY(-50%)",
//           },
//           "50%": {
//             transform: "translateY(50%)",
//           },
//           "100%": {
//             transform: "translateY(-50%)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
