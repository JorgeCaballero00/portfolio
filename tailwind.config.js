/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      '#0f1117',
        bgalt:   '#161b27',
        surface: '#1e2538',
        surface2:'#252d42',
        green:   '#00e5a0',
        muted:   '#5c6480',
        soft:    '#9ba3c0',
        txt:     '#e8eaf6',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0,229,160,0.25)',
        'glow-sm': '0 0 12px rgba(0,229,160,0.2)',
      },
    },
  },
  plugins: [],
}
