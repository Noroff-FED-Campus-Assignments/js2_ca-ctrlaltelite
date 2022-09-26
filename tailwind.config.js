/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        profileBackgroundImage: (theme) => ({
          "profileCard" : "url('https://images.unsplash.com/photo-1463194537334-3940784aa69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        })
      },
      colors: {
        fontWhite: 'hsl(0, 100%, 97%)',
        filterBlue: 'hsl(216, 41%, 39%)',
        mainBlue: 'hsl(216, 41%, 39%)'
      },
    },
  },
  plugins: [],
};
