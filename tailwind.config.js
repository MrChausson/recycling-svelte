/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': "Inter, system-ui, sans-serif"
      },
      textColor: {
        'light': "#555555",
        'normal': "#333232",
        'success': '#0b984f',
        'error': '#E03616'
      },
      colors: {
        'brand-yellow-normal': '#F8D247',
        'brand-yellow-dark': '#E0B827',

        'brand-purple-light': '#6482FF',
        'brand-purple-normal': '#274FF5',
      },
      backgroundImage: {
        'chart': 'linear-gradient(90deg, #fff 30%, transparent 80%), url(/chart.svg)',
        'chart-full': 'url(/chart-full.svg)'
      },
      boxShadow: {
        'light-16': '0px 8px 16px 0px rgba(0, 0, 0, 0.16)',
        'light-32': '0px 16px 32px 0px rgba(0, 0, 0, 0.16)',
        'centered': '0px 0px 8px 0px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '32px'
      },
      screens: {
        'tall': { 'raw': '(min-height: 790px)' },
      }
    },
  },
  plugins: [],
}

