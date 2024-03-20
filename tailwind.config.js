/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          'lime-green': 'hsl(163, 72%, 41%)',
          'bright-red': 'hsl(356, 69%, 56%)',
          'facebook': 'hsl(208, 92%, 53%)',
          'twitter': 'hsl(203, 89%, 53%)',
          'instagram-gradient': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
          'youtube': 'hsl(348, 97%, 39%)'
        },
        darkMode: {
          'toggle': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
          'very-dark-blue-bg': 'hsl(230, 17%, 14%)',
          'very-dark-blue-top-bg-pattern': 'hsl(232, 19%, 15%)',
          'dark-desaturated-blue-card-bg': 'hsl(228, 28%, 20%)',
          'desaturated-blue-text': 'hsl(228, 34%, 66%)',
          'white-text': 'hsl(0, 0%, 100%)',
        },
        lightMode: {
          'toggle': 'hsl(230, 22%, 74%)',
          'white-bg': 'hsl(0, 0%, 100%)',
          'very-pale-blue-top-bg-pattern': 'hsl(225, 100%, 98%)',
          'light-grayish-blue-card-bg': 'hsl(227, 47%, 96%)',
          'dark-grayish-blue-text': 'hsl(228, 12%, 44%)',
          'very-dark-blue-text': 'hsl(230, 17%, 14%)',
        },
      },
    },
    plugins: [],
  }
}
