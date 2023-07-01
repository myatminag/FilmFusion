/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                tiny: "0.7rem",
                sm: "0.9rem",
                base: "1rem",
                md: "1.2rem",
                xl: "1.4rem",
                "2xl": "1.6rem",
                heading: "1.5rem",
                "sub-heading": "1.25rem",
            },
            textColor: {
                "primary-white": "#F8F9FA",
                "primary-blue": "#292738",
            },
            colors: {
                "primary-bg-blue": "#1a1927",
                "rich-black": "#0D1B2A",
                "oxford-blue": "#1B263B",
                "yinmin-blue": "#415A77",
                "sliverlake-blue": "#778DA9",
            },
            animation: {
                skeleton: "skeleton 1s infinite steps(10, end) alternate",
            },
            keyframes: {
                skeleton: {
                    "0%": { opacity: 0.25 },
                    "100%": { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
