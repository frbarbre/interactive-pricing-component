/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-cyan": "hsl(174, 77%, 80%)",
        "strong-cyan": "hsl(174, 86%, 45%)",
        "discount-bg": "hsl(14, 92%, 95%)",
        "discount-text": "hsl(15, 100%, 70%)",
        "cta-text": "hsl(226, 100%, 87%)",
        "main-bg": "hsl(230, 100%, 99%)",
        "toggle-bg": "hsl(223, 50%, 87%)",
        "text": "hsl(225, 20%, 60%)",
        "cta-bg": "hsl(227, 35%, 25%)"
      },
      fontSize: {
        body: "15px"
      },
      translate: {
        calc: "calc(100% + 5px)"
      },
      backgroundImage: {
        "bg-pattern": "url('/bg-pattern.svg')",
        "bg-circles": "url('/pattern-circles.svg')"
      }
    },
    screens: {
      sm: "370px",
      md: "500px"
    }
  },
  plugins: [],
};
