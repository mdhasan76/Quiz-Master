/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('/src/component/img/quizBanner.jpg')",

      },
    },
    plugins: [],
  }
}
