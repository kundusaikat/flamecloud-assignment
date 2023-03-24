/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "pot-grey1" : "#D9D8D6",
        "pot-grey7" : "#111822",
        "pot-sky1": "#5865F2",
        "pot-sky2":"#077BFF",
        "pot-black":"#000000",
        "pot-white" : "#FFFFFF"
      }
    },
  },
  plugins: [],
};
