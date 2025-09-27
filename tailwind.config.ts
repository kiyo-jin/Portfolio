import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-main)", "sans-serif"],
        head: ["var(--font-head)", "sans-serif"],
      },

      colors: {
        main: "#2C97BE",
        second: "#48C6C4",
        accent: "#EC6DBF",
        basecolor: "#EFF9FD",
        text_color: "#074D67",
      },
    },
  },
  plugins: [],
};
export default config;
