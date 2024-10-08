import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundColor: {
        'theme': '#8259EF',
        'card-dark': '#0D0621'
      },
      backgroundImage: {
        'landing': "url('/background/landing.png')",
        'transfer': "url('/background/transfer.png')"
      },
      textColor: {
        'theme': '#8259EF',
      },
      borderColor: {
        'theme': '#8259EF', // Example border color
        'secondary': '#8259EF', // Another example border color
      },
      boxShadow: {
        'theme': '0px 0px 12px 1px rgba(130, 89, 239, 0.57)',
      },
      fontFamily: {
        sfpro: ['sfpro', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
