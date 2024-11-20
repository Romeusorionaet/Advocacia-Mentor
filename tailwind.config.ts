import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: 'var(--font-comfortaa)',
      },

      colors: {
        black: '#000',
        white: '#FFF',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-400': '#9ca3af',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-200': '#fed7aa',
        'orange-300': '#fdba74',
        'cyan-50': '#ecfeff',
        'blue-100': '#dbeafe',
        'blue-500': '#3b82f6',
        'blue-800': '#1e40af',
        'red-800': '#991b1b',
        'yellow-800': '#854d0e',
        'green-100': '#dcfce7',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
      },

      width: {
        '1.01/12': '10%',
        '2.02/12': '20%',
        '1.05/6': '15%',
        '2.05/6': '35%',
        '2.02/5': '42%',
        '1.07/2': '57%',
        '4.06/6': '60%',
        '8.07/12': '70%',
      },

      height: {
        '40r': '40rem',
        '50r': '50rem',
        '4.0/6': '60%',
        '11.0/12': '90%',
        '1.0/3': '30%',
        '1.0/6': '10%',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
} satisfies Config
