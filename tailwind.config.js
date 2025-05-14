module.exports = {
  content: [
     "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      backgroundImage: {
        "banner-gradient": "radial-gradient(at 50% 75%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
}