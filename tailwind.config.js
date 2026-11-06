/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          // Surface (0m - 200m)
          surface: '#061525',
          'surface-light': '#0a1e34',
          'surface-glow': '#0ea5e9',
          
          // Mesopelagic / Twilight (200m - 1000m)
          twilight: '#040d1a',
          'twilight-card': '#071629',
          
          // Bathypelagic / Midnight (1000m - 4000m)
          midnight: '#020914',
          'midnight-card': '#051121',
          
          // Hadal / Abyss (4000m+)
          abyss: '#010409',
          trench: '#000206',
          'abyss-card': '#030b14',

          // Bioluminescent Accents
          teal: '#14b8a6',
          cyan: '#06b6d4',
          neon: '#00f5d4',
          marine: '#38bdf8',
          bioglow: '#2dd4bf',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'glow-shimmer': 'glowShimmer 4s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowShimmer: {
          '0%': { opacity: '0.2', transform: 'scale(0.98)' },
          '100%': { opacity: '0.4', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
