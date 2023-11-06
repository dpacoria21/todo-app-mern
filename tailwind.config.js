/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'electric-violet': {
                    '50': '#f6f4fe',
                    '100': '#f0eafd',
                    '200': '#e1d8fc',
                    '300': '#cbb9f9',
                    '400': '#b291f4',
                    '500': '#9a64ee',
                    '600': '#8436e2',
                    '700': '#7c31d0',
                    '800': '#6829ae',
                    '900': '#56238f',
                    '950': '#361461',
                }
            },
            fontFamily: {
                'roboto' : ['Roboto'],
                'russo-one': ['Russo One']
            }
        },
    },
    plugins: [],
};