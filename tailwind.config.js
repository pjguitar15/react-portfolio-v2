/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'support-image': "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')",
        'pricing-image': "url('./assets/white-pattern-bg.jpg')"
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans serif']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
