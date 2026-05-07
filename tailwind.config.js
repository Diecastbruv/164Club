/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: '#080808',
        bone: '#f0ece3',
        ash: '#7a7a7a',
        smoke: '#111111',
        dust: '#1e1e1e',
        mist: '#e8e4dd',
        red: '#c0392b',
        'red-bright': '#e63946',
        'red-dim': '#7a1a14',
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'marquee': 'marquee 18s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
