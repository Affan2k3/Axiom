/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
      'raleway': ['Raleway', 'sans-serif'],
      
    },
    extend: { transitionDuration: {
      '0': '0ms',
      '3000': '3000ms',
    }},
  },
  plugins: [],
}