import type { Config } from "tailwindcss";
import theme from "./src/app/styles/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: theme.colors, // Use the colors from them.ts
    }
  },

  darkMode: 'media', // or 'class' if you prefer manually controlling the mode
  
  plugins: [],
};

export default config;
