/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#2F2F2F',
        'bgmain': '#222',
        'bghelper': '#444',

        'gradient1': '#d7ebeb',
        'gradient2': '#f4afe9',
        'gradient3': '#9d7ef3',
      }
    },
  },
  plugins: [],
}

