/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('./src/Assests/banner-image.png')",
      }
    },
  },
  plugins: [],
};
