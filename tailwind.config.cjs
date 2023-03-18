/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					primary: '#141414',
					secondary: '#718096',
					accent: '#2d3748',
					text: '#cbd5e0',
				},
				light: {
					primary: '#fff',
					secondary: '#f7fafc',
					accent: '#4a5568',
					text: '#1a202c',
				},
			},
		},
	},
	plugins: [],
};
