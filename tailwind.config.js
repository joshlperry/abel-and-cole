/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-yellow': "#F4C744",
        'brand-black': "#232323",
        'brand-orange': "#F09650",
        'brand-darkGrey': "#757575",
        'brand-lightGrey': "#D9D9D9",
        'brand-purple': "#6A0E5A",
        'brand-green': "#00964F",
      }
    },
  },
  plugins: [],
}
