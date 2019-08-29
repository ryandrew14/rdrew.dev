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
        name: `rdrew.dev`,
        short_name: `rdrew.dev`,
        start_url: `/`,
        background_color: `#F6F6F6`,
        theme_color: `#B71B03`,
        display: `minimal-ui`,
        icon: `src/content/images/rose.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-styled-components`,
  ],
}
