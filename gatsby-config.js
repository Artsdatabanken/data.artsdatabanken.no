module.exports = {
  siteMetadata: {
    title: `Natur i Norge`
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`
      }
    }
  ]
};
