/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg,#fb923c,#22c55e)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
