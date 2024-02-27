/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E3BEE",
        "bg-shade": "#F5FCFF",
        heading: "#282938",
        body: "#1C1E53",
      },
    },
  },
  plugins: [],
};
