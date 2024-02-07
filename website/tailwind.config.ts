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
      colors: {
        // Defining the blue and white color palette
        blue: {
          light: "#DCEEFB", // Lighter shade for background or accents
          DEFAULT: "#0C4A6E", // Default blue, good for headers or emphasis
          dark: "#12232E", // Darker shade for footers or dense text
        },
        white: "#FFFFFF", // Pure white for text or backgrounds

        // Vibrant color for CTA buttons
        vibrant: {
          light: "#FFD166", // Lighter shade, if needed
          DEFAULT: "#EF476F", // Eye-catching pinkish-red
          dark: "#FF570A", // Darker shade, more intense
        },
      },
    },
  },
  plugins: [],
};
export default config;
