import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      /* COLORS */
      colors: {
        grey: "#D9D9D9",
        bg_dark: "#342F2F",
        bg_darker: "#272727",
        light_text: "#ffffff",
        dark_text: "#000000",
        bg_light: "#ADADAD",
        bg_lighter: "#e5e5e5",
        bg_hover: "#878787",
      },

      /* FONTS */
      fontFamily: {
        Headline: ["Arimo", "sans-serif"],
        Body: ["Inter", "sans-serif"],
      },

      fontSize: {
        h1: "2.2rem",
        h2: "1.6rem",
        txt_small: "0.6rem",
        txt_medium: "0.75rem",
        txt_large: "1rem",
        txt_larger: "1.35rem",
      },

      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },

      /* SCREEN SIZES */
      screens: {
        small_mobile: "320px",
        large_mobile: "480px",
        tablet: "768px",
        large_tablet: "1024px",
        desktop: "1200px",
        large_desktop: "1440px",
      },

      /* SPACING, SHADOWS, ETC */
      spacing: {},

      borderRadius: {
        small: "0.5rem",
        large: "3rem",
        full: "50%",
      },

      boxShadow: {
        bs: "0 4px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
