import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        clouds: "url('/cloud-background.png')",
      },
      colors: {
        primary: "#1E213A",
        secondary: "#100E1D",
        celsius: "#110E3C",
        "fahrenheit-bg": "#585676",
        "custom-white": "#E7E7EB",
        "custom-grey": "#6E707A",
        "custom-grey-2": "#A09FB1",
        "custom-grey-3": "#88869D",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
