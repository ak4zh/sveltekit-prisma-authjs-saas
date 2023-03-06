const konstaConfig = require('konsta/config');

/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
	theme: {
		extend: {}
	},
	plugins: [
    require('@tailwindcss/typography'),
  ]
});
