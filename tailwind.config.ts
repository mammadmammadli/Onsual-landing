import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
        },
      ],
      "6xl": [
        "56px",
        {
          lineHeight: "64px",
        },
      ],
      "5xl": [
        "40px",
        {
          lineHeight: "48px",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "48px",
        },
      ],
      "3xl": [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      "2xl": [
        "20px",
        {
          lineHeight: "28px",
        },
      ],
      xl: [
        "18px",
        {
          lineHeight: "28px",
        },
      ],
      lg: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      base: [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      sm: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      xs: [
        "10px",
        {
          lineHeight: "16px",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-light-right":
          "linear-gradient(270deg, #FFF 32.05%, rgba(255, 255, 255, 0.00) 100%)",
        "gradient-light-left":
          "linear-gradient(90deg, #FFF 32.05%, rgba(255, 255, 255, 0.00) 100%)",
        "gradient-dark-right":
          "linear-gradient(270deg, #161618 32.05%, rgba(22, 22, 24, 0.00) 100%)",
        "gradient-dark-left":
          "linear-gradient(90deg, #161618 32.05%, rgba(22, 22, 24, 0.00) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-hoves)"],
      },
      colors: {
        transparent: "transparent",
        dark: {
          background: {
            primary: "#101012",
            secondary: "#1C1C1F",
            alpha: "rgba(34, 35, 38, 0.64)",
          },
          brand: {
            primary: "#2BCF69",
            secondary: "#20AA54",
            alpha: "rgba(2, 192, 74, 0.16)",
          },
          source: {
            black: "#000000",
            container: {
              black: "rgba(0, 0, 0, 0.12)",
              error: "rgba(243, 40, 40, 0.12)",
              info: "rgba(32, 88, 187, 0.12)",
              success: "rgba(0, 164, 0, 0.12)",
              warning: "rgba(255, 165, 0, 0.12)",
              white: "rgba(255, 255, 255, 0.12)",
            },
            error: "#F32828",
            info: "#2058BB",
            scrim: {
              black: "rgba(0, 0, 0, 0.72)",
              white: "rgba(255, 255, 255, 0.72)",
            },
            success: "#00A400",
            warning: "#FFA500",
            white: "#FFFFFF",
          },
          surface: {
            high: "#1C1C1F",
            low: "#292B2E",
            medium: "#222326",
          },
          utility: {
            disabled: "#21272C",
            high: "#F5F7FA",
            low: "#46525C",
            medium: "#646C78",
          },
        },
        light: {
          background: {
            primary: "#F4F6FA",
            secondary: "#FFFFFF",
            alpha: "rgba(244, 246, 250, 0.64)",
            gradient:
              "linear-gradient(90deg, #FFF 32.05%, rgba(255, 255, 255, 0.00) 100%);",
          },
          brand: {
            primary: "#02C04A",
            secondary: "#049B3D",
            alpha: "rgba(2, 192, 74, 0.16)",
          },
          source: {
            black: "#000000",
            container: {
              black: "rgba(0, 0, 0, 0.12)",
              error: "rgba(243, 40, 40, 0.12)",
              info: "rgba(32, 88, 187, 0.12)",
              success: "rgba(0, 164, 0, 0.12)",
              warning: "rgba(255, 165, 0, 0.12)",
              white: "rgba(255, 255, 255, 0.12)",
            },
            error: "#F32828",
            info: "#2058BB",
            scrim: {
              black: "rgba(0, 0, 0, 0.72)",
              white: "rgba(255, 255, 255, 0.72)",
            },
            success: "#00A400",
            warning: "#FFA500",
            white: "#FFFFFF",
          },
          surface: {
            high: "#FFFFFF",
            low: "#DFE4EB",
            medium: "#EBEEF2",
          },
          utility: {
            disabled: "#CDD4E0",
            high: "#13171A",
            low: "#9BA5B5",
            medium: "#62717C",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
