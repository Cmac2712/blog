/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["lato", ...defaultTheme.fontFamily.sans],
        serif: ["arvo", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  daisyui: {
    themes: true,
  },
};
