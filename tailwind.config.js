/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bet: '#e89e7b',
        check: '#8db48a',
        fold: '#6a9dc2',
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
