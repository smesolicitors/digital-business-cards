/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'smenavy': {
          50: '#e8ebef',
          100: '#d0d6de',
          200: '#a1adbe',
          300: '#73849d',
          400: '#445b7d',
          500: '#15325c',
          600: '#11284a',
          700: '#0d1e37',
          800: '#081425',
          900: '#040a12',
        },
        'smemint': {
          50: '#f9fcf9',
          100: '#f4f9f2',
          200: '#e8f4e5',
          300: '#ddeed9',
          400: '#d1e9cc',
          500: '#c6e3bf',
          600: '#9eb699',
          700: '#778873',
          800: '#4f5b4c',
          900: '#282d26',
        },
      },
    },
	},
	plugins: [],
}
