/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/react/controllers/*.jsx"
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'body': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

