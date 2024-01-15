// tailwind.config.js

module.exports = {
  // ... other configurations
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
