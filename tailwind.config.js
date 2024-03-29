/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js", "./js/components/*.js", "./js/feedPosts.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        profileCard: "url('https://images.unsplash.com/photo-1463194537334-3940784aa69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
      colors: {
        fontWhite: "#FFFFFF",
        filterBlue: "hsl(216, 41%, 39%)",
        mainBlue: "hsl(216, 41%, 39%)",
        mainGray: "#D5D5D6",
        mainBlack: "#000000",
        seeThroughBlue: "rgba(59, 92, 142, 69)",
      },
      fontFamily: {
        bodyText: ["Roboto"],
        headers: ["Cairo"],
      },
    },
  },
  plugins: [],
};
