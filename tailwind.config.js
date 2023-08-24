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
        red: '#cc0000',
        text: '#1c1a1b',
      },

      keyframes: {
        loading1: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        loading3: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        loading2: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' },
        },
      },

      animation: {
        'loading1': 'loading1 0.6s infinite',
        'loading2': 'loading2 0.6s infinite',
        'loading3': 'loading3 0.6s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

