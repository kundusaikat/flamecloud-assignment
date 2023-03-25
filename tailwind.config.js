/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "pot-grey1" : "#D9D8D6",
        "pot-grey2" : "rgba(255, 255, 255, 0.25)",
        "pot-grey7" : "#111822",
        "pot-sky1": "#5865F2",
        "pot-sky2":"#077BFF",
        "pot-black":"#000000",
        "pot-white" : "#FFFFFF",
        "pot-green1":"#16D113",
        "pot-green2": "rgba(0,182,122,0.1)",
        "pot-green3" : "#D4EAE8",
        "pot-blue1":"#0566D4"
      }
    },
  },
  plugins: [],
};
