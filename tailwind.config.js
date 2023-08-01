/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        medium: 'medium',
        black: 'black',
      },
      colors: {
        primary: '#ede5de',
        red: '#fb240c',
        text: '#1c1a1b',
        // light: '#09d8fd',
        // dprimary: "#16213E",
        // dlight: '#0F3460'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

