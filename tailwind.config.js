/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPattern: "url('/images/bg-pattern.svg')",
        circlesPattern: "url('/images/pattern-circles.svg')"
      },
      fontFamily: {
        sans: ['Manrope'],
        serif: ['sans-serif']
      },
      colors: {
        softCyan: 'hsl(174, 77%, 80%)', // Full slider bar
        strongCyan: 'hsl(174, 86%, 45%)', // Slider Backround
        lightGrayishRed: 'hsl(14, 92%, 95%)', // Discount Background
        lightRed: 'hsl(15, 100%, 70%)', // Discount Text
        paleBlue: 'hsl(226, 100% 87%)', // CTA Text
        veryPaleBlue: 'hsl(230, 100%, 99%)', // Main Bg
        lightGrayishBlueBar: 'hsl(224, 65%, 95%)', // Empty Slider Bar
        lightGrayishBlueBg: 'hsl(223, 50%, 87%)', // Toggle Background
        grayishBlue: 'hsl(225, 20%, 60%)', // Text
        darkBlue: 'hsl(227, 35%, 25%)' // Text , CTA BG
      }
    }
  },
  plugins: []
}
