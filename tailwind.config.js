/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: 'var(--skin-color)',
        'bg-main': 'var(--bg-main)',
        'bg-card': 'var(--bg-card)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        // Headings - Design System Tokens
        'h1-desktop': '56px',
        'h1-mobile': '36px',
        'h2-desktop': '40px',
        'h2-mobile': '28px',
        'h3-desktop': '28px',
        'h3-mobile': '22px',
        'h4-desktop': '22px',
        'h4-mobile': '18px',
        // Body
        'body': '16px',
        'body-lg': '18px',
        'small': '14px',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.6',
        'button': '1.4',
      },
      letterSpacing: {
        'heading': '-0.02em',
        'button': '0.05em',
        'nav': '0.03em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
