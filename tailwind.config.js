module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500"],
  },
  experimental: {
    darkModeVariant: true,
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
