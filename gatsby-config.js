module.exports = {
  siteMetadata: {
    title: `Ryan Drew`,
    description: `A portfolio site for Ryan Drew`,
    author: `@ryandrew14`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/rose.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
  ],
}
