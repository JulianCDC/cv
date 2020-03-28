/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "assets", "images")
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [require("tailwindcss"), require("./tailwind.config")]
      }
    }
  ]
};
