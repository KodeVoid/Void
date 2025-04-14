/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


    theme: {
      extend: {
        animation: {
          'subtle-spin': 'subtle-spin 120s linear infinite',
          'slow-spin': 'slow-spin 80s linear infinite',
          'slower-spin-reverse': 'slow-spin 100s linear infinite reverse',
          'pulse': 'pulse 8s ease-in-out infinite',
          'twinkle': 'twinkle 4s ease-in-out infinite',
        },
        keyframes: {
          'subtle-spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          'slow-spin': {
            '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
            '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
          },
          'pulse': {
            '0%, 100%': { 
              opacity: '0.7', 
              transform: 'translate(-50%, -50%) scale(1)' 
            },
            '50%': { 
              opacity: '1', 
              transform: 'translate(-50%, -50%) scale(1.1)' 
            },
          },
          'twinkle': {
            '0%, 100%': { opacity: '0.7' },
            '50%': { opacity: '1' },
          },
        },
        boxShadow: {
          'glow': '0 0 60px 20px rgba(128, 0, 255, 0.3)',
        },
      },
    },
    plugins: [],
  }