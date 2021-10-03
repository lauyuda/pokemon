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
      height: theme => ({
        "screen-85vh": "85vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      zIndex: {
        '99': '99',
        '-99': '-99',
       }
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
