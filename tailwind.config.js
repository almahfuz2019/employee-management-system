/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#176F6B",
          "secondary": "#FFC000",
          "accent": "#FFEDD5",
          "neutral": "#F3F4F6",
          "base-100": "#ffffff",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
      {
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}