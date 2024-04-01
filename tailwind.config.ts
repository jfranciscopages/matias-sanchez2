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
        "plan-3": "url('/imgs/plan3.webp')",
        "plan-2": "url('/imgs/plan2.webp')",
        "plan-1": "url('/imgs/plan1.webp')",
      },
      colors: {
        blue: "rgb(41, 105, 176)",
        ligthblue: "rgba(41, 105, 176, 1)",
        paypal: "#1e477a",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },

  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".animate-fade-in": {
          animation: "fade-in 0.6s ease-in",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
