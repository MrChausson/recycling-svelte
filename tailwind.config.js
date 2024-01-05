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
        'success': '#00AF54',
        'error': '#E03616'
      },
      colors: {
        'brand-yellow-normal': '#F8D247',
        'brand-yellow-dark': '#E0B827',
      },
      backgroundImage: {
        'chart': 'linear-gradient(90deg, #fff 30%, transparent 80%), url(/chart.svg)'
      },
      boxShadow: {
        'light-32': '0px 16px 32px 0px rgba(0, 0, 0, 0.16)'
      },
      borderRadius: {
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}

