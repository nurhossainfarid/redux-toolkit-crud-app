/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: [
    {
      mytheme: { 
        "primary": "#529B03",      
        "secondary": "#E9E92F",      
        "accent": "#F6F9C8",      
        "neutral": "#191A3E",      
        "base-100": "#FFFFFF",      
        "info": "#CAE2E8",      
        "success": "#DFF2A1",      
        "warning": "#F7E488",
        "error": "#F2B6B5",
      },
    }, 
  ],
  plugins: [require("daisyui")],
}
