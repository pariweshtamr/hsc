/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0A3D42",
        accentBright: "#d9fb83",
        neutralLight: "#E8E8E8",
        secondaryDark: "#333333",
        additionalAccent: "#FF5F57",
        customBlack: "#212121",
        customWhite: "#f1f1f1",
      },
    },
    fontFamily: {
      sans: ["var(--font-uni)"],
      roboto: ["var(--font-roboto)"],
    },
  },
  plugins: [],
}
