module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      backgroundImage: {
        "banner-gradient": `bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%`
      }
    }
  },
  plugins: []
}