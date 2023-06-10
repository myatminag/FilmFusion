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
                "primary-blue": "#778DA9",
            },
            colors: {
                "rich-black": "#0D1B2A",
                "oxford-blue": "#1B263B",
                "yinmin-blue": "#415A77",
                "sliverlake-blue": "#778DA9",
                platinum: "#E0E1DD",
            },
        },
    },
    plugins: [],
};
