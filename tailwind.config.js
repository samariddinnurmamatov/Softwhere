/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // O'zgartirilgan ko'rsatmalar
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "custom-pink": "rgba(255, 215, 233, 1)",
      },
      borderColor: {
        "custom-border-color": "rgba(221, 245, 255, 1)",
      },
      bgrang: {
        rang: "linear-gradient(180deg, rgba(187, 133, 255, 0.166) -8.54%, rgba(255, 244, 251, 0.2) 100%)",
      },
      backgroundColor2: {
        "gradient-color":
          "linear-gradient(180deg, rgba(187, 133, 255, 0.166) -8.54%, rgba(255, 244, 251, 0.2) 100%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
