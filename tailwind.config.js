const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'wallpaper': "url('/src/images/pokebox.png')",
      },
    },
  },
  variants: {
    extend: {
      cursor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/line-clamp'),
  ],
};
