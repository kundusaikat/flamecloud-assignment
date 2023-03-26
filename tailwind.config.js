/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "pot-grey1" : "#D9D8D6",
        "pot-grey2" : "rgba(255, 255, 255, 0.25)",
        "pot-grey3":"rgba(30, 30, 30, 0.01)",
        "pot-grey4":"rgba(217, 216, 214, 0.25)",
        "pot-grey5":"rgba(217, 216, 214, 0.05)",
        "pot-grey6":"#BDBDBD",
        "pot-grey7" : "#111822",
        "pot-sky1": "#5865F2",
        "pot-sky2":"#077BFF",
        "pot-black":"#000000",
        "pot-white" : "#FFFFFF",
        "pot-green1":"#16D113",
        "pot-green2": "rgba(0, 182, 122, 0.1)",
        "pot-green4": "rgba(22, 209, 19, 0.1)",
        "pot-green3" : "#D4EAE8",
        "pot-blue1":"#0566D4",
        "pot-blue2":"rgba(7, 123, 255, 0.1)",
        "pot-blue3":"rgba(7, 123, 255, 0.25)",
        "pot-blue4":"rgba(7, 123, 255, 0.5)",
        "pot-blue5":"rgba(88, 101, 242, 0.1)"
      }
    },
    fontFamily:{
      figtree:"Figtree, sans-serif"
    }
  },
  plugins: [],
};
