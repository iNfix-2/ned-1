/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tekever: {
          bg: '#020E1C',
          dark: '#010811',
          surface: '#051427',
          card: '#031020',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: '#2563eb',
          blueHover: '#1d4ed8',
          slate: '#8B9BB4',
          dim: '#475569',
          accent: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
