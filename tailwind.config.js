/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8FA',
        'cream-secondary': '#FDEEF3',
        'cream-section': '#FFF5F7',
        'pink-primary': '#E8A5B8',
        'pink-soft': '#F4C6D7',
        'pink-accent': '#D97A98',
        'text-primary': '#40363A',
        'text-secondary': '#7A6D72',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '10xl': ['10rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(217, 122, 152, 0.08), 0 2px 8px rgba(217, 122, 152, 0.04)',
        'glass-md': '0 16px 48px rgba(217, 122, 152, 0.12), 0 4px 16px rgba(217, 122, 152, 0.06)',
        'glass-lg': '0 24px 64px rgba(217, 122, 152, 0.16), 0 8px 24px rgba(217, 122, 152, 0.08)',
        'pink-glow': '0 0 40px rgba(232, 165, 184, 0.3)',
        'pink-glow-lg': '0 0 80px rgba(232, 165, 184, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
