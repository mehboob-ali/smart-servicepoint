// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
    plugins: [
    
  ],
}

export default config;
