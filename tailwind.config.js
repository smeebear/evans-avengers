module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#00171f",
        gray: "#4F595B",
        purple: "#C2B9D7",
        space: "#335463",
        white: "white",
        black: "black"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
