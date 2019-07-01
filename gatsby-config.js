module.exports = {
  siteMetadata: {
    title: "Artsdatabanken åpne data"
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preval",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "no"
      }
    }
  ]
};
