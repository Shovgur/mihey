import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      primary: ["Vollkorn"],
    },
    fontSize: {
      big: ["5rem", { fontWeight: 400, lineHeight: "120px" }],
      "header-little": ["1rem", { fontWeight: 400, lineHeight: "18px" }],
      "page-title": [
        "2rem",
        { fontWeight: 400, lineHeight: "34px", letterSpacing: "" },
      ],
    },
    textColor: {
      'base': "#220A67",
      "base_2": "#3F1CA3",
      'white': '#fff'
    },
  },
  plugins: [],
};
export default config;
