/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nethawk palette, 60/30/10: black base, neutral (zinc) greys, deep-blue accent used sparingly.
        ink: { DEFAULT: '#000000', card: '#0A0A0A' },
        accent: {
          DEFAULT: '#1D4ED8', // fills: primary buttons, active states, progress, selection (white text on it)
          bright: '#3B82F6',  // blue that must be read on black: small labels, icons, strokes, focus rings
          navy: '#0B1F4D',    // glows and tints
        },
        mist: '#F4F6F9',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Pilcrow Rounded"', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['"Bebas Neue"', 'Impact', '"Arial Narrow"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 8s linear infinite',
        'step-in': 'stepIn 300ms ease-out',
      },
      keyframes: {
        stepIn: {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
