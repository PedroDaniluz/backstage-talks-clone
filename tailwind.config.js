/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-blueSea',
    'bg-blueDeeper',
    'bg-orangeNeon',
    'bg-redNeon',
    'bg-yellowNeon',
  ],
  theme: {
    extend: {
      colors: {
        blueSea: '#00c1b5',
        blueDeeper: '#1d3fbb',
        orangeNeon: '#ff651a',
        redNeon: '#e30512',
        yellowNeon: '#ffbe00'
      }
    },
  },
  plugins: [],
}

