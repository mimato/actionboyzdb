require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Action Boyz DB`,
    description: `For when you really need to know something incredibly unimportant.`,
    author: `Mia Henderson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-tmdb',
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
        language: 'en-US',
        region: 'US',
        modules: {
          account: {
            activate: true,
            endpoints: {
              list: 'accountLists',
            },
          },
          movie: {
            activate: true,
          },
          person: {
            activate: true,
          },
          company: {
            activate: true,
          },
        },
        timezone: 'America/New_York',
        reqPerTenSeconds: 36,
        poster: true,
        backdrop: false,
      },
    },
  ],
}
