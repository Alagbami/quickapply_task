/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navVector: "url('/src/assets/vector.png')",
        faqHero: "url('/src/assets/faqHero.png')",
        policyBg: "url('/src/assets/policyBg.png')",
      },
    },
  },
  plugins: [],
};