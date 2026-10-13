/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#090a0d',
          darker: '#060709',
          panel: '#101318',
          card: '#13171f',
          hover: '#191e29',
        },
        border: {
          subtle: '#1d232f',
          medium: '#283142',
          gold: 'rgba(212, 175, 55, 0.3)',
          goldBright: 'rgba(212, 175, 55, 0.7)',
        },
        gold: {
          50: '#fdfbf0',
          100: '#faf3d4',
          200: '#f5e5a3',
          300: '#eed16f',
          400: '#e5be42',
          500: '#d4af37', // Refined architectural gold
          600: '#b89228',
          700: '#926f1c',
          800: '#6f5218',
          900: '#523c14',
        },
        fg: {
          DEFAULT: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
          dark: '#334155',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'DM Mono', 'monospace'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px -4px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 0 40px -5px rgba(212, 175, 55, 0.3)',
        'panel': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
