const { nextui } = require('@nextui-org/react');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx}'],
  serverless: true,
  serverlessConfig: {
    api: {
      timeout: 30,
    },
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.green,
        blue: colors.sky,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          850: '#222226',
          666: '#666',
        },
        slate: {
          900: '#000000',
          800: '#1e293b',
          700: '#334155',
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      flexGrow: {
        'half': 0.5,
      },
    },
  },
  plugins: [nextui()],
};
