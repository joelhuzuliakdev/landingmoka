/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
        colors: {
            mocha: {
            50:  '#FAF6F1',
            100: '#F2E9DC',
            200: '#E0CBAF',
            300: '#C9A87C',
            400: '#B08850',
            500: '#8C6A3A',
            600: '#6B4F2B',
            700: '#4E391E',
            800: '#332513',
            900: '#1A120A',
            },
            sage: {
            50:  '#F2F5EF',
            100: '#DDE6D5',
            200: '#BBC9A8',
            300: '#93A87A',
            400: '#6E8A51',
            500: '#526B3A',
            600: '#3C4F2A',
            700: '#28361C',
            800: '#161D0F',
            900: '#0A0D07',
            },
            cream: '#FDF8F2',
            latte: '#EDE0CE',
        },
        fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        },
        },
    },
    plugins: [],
}