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
    screens: {
      "sm": "320px",
      "mm": "375px",
      "ml": "425px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "2560px",
    },

    extend: { transitionDuration: {
      '0': '0ms',
      '3000': '3000ms',
    }},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}