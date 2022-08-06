module.exports = {
  // purge: ['./src/**/*.{vue,js,ts}'],
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
