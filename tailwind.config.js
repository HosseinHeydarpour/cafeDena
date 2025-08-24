/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#183D3D',
				secondary: '#A7D397',
				accent: '#FFA600',
				neutral: '#F7FFF7',
			},
		},
	},
	plugins: [],
};
