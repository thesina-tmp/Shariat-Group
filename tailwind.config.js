/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Panel/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-pattern": "linear-gradient(270deg, #363940 0%, #151c28 74%)",
      },
      boxShadow: {
        '3xl': '0 0px 10px 2px',
      },
    },
  },
  plugins: [],
};
// npx tailwindcss -i ./panel/src/input.css -o ./panel/src/output.css --watch