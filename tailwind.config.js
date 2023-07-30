/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grayish-blue': "hsl(220, 15%, 55%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "dark-blue": "hsl(218, 44%, 22%)",
        "accent-blue": "hsl(228, 45%, 44%)"
      },


    },
  },
  plugins: [],
}
