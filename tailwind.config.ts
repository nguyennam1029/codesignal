import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primary: "#D65A31",
        grayDarkest: "#131316",
        grayDarker: "#212126",
        grayDark: "#9394A1",
        grayLightest:"#f7f7f7", //Color Heading
      },
      fontFamily: {
        primary: ["var(--font-manrope)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
         bounceRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" }, // Nhảy sang phải 5px
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-right": "bounceRight 0.8s ease-in-out infinite", // Chạy vô hạn

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
