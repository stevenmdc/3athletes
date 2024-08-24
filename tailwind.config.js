/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        showup: "0.2s showup 2.2s ease forwards",
        showup2: "0.4s showup 2.6s ease forwards",
        showup3: "0.6s showup 2.8s ease forwards",
        showup4: "0.8s showup 3s ease forwards",
        reveal: "reveal 7s infinite",
        slidein: "slidein 7s forwards",
        slidein2: "slidein2 2.5s ease-in-out",
        slidein3: "slidein3 2.5s ease-in-out forwards",
      },
      keyframes: {
        showup: {
          "0%": { opacity: "0" },
          "20%": { opacity: "0.2" },
          "35%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        reveal: {
          "0%": { opacity: "0", width: "0px" },
          "20%": { opacity: "1", width: "0px" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0", width: "350px" },
        },
        slidein: {
          "0%": { marginLeft: "-200px", opacity: "0" },
          "20%": { marginLeft: "-200px", opacity: "0.1" },
          "35%": { marginLeft: "0px", opacity: "0.8" },
          "100%": { marginLeft: "0px", opacity: "1" },
        },
        slidein2: {
          "0%": { marginRight: "0px", opacity: "0" },
          "20%": { marginRight: "50px", opacity: "0" },
          "35%": { marginRight: "0px", opacity: "0.9" },
          "100%": { marginLeft: "0px", opacity: "1" },
        },
        slidein3: {
          "0%": { marginTop: "-50px", opacity: "0" },
          "20%": { marginTop: "-50px", opacity: "0" },
          "35%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        slidein4: {
          "0%": { marginTop: "-50px", opacity: "0" },
          "20%": { marginTop: "-50px", opacity: "0" },
          "35%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
