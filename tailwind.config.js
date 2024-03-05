/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: {
          "accent-1": "hsl(var(--accent-1) / <alpha-value>)",
          "accent-2": "hsl(var(--accent-2) / <alpha-value>)",
          "accent-3": "hsl(var(--accent-3) / <alpha-value>)",
          "accent-4": "hsl(var(--accent-4) / <alpha-value>)",
          "accent-5": "hsl(var(--accent-5) / <alpha-value>)",
          "accent-6": "hsl(var(--accent-6) / <alpha-value>)",
          "accent-7": "hsl(var(--accent-7) / <alpha-value>)",
          "accent-8": "hsl(var(--accent-8) / <alpha-value>)",
        },
        rewoven: {
          ivory: "#F4EEE2",
          bone: "#E7DECC",
          caramel: "#C39B5E",
          jade: "#00C868",
          biscuit: "#E3B570",
          alabaster: "#FCFBF8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  important: true,
};
