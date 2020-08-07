require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mini Pop Kids`,
    description: `Canada's #1 Music Brand For Kids`,
    author: `Dan Choiniere`,
    tourName: `Bright Lights Tour`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58225315-7",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-favicon`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Fredoka One", "Oswald"],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `MPKTourDates`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Walmart`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `VIPGalleries`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `LondonVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `BrantfordVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `MontrealVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `SaultSteMarieVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `KingstonVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `SudburyVIP`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `TimminsVIP`,
          },
        ],
      },
    },
    //
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://www.googletagmanager.com"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mini Pop Kids`,
        short_name: `MPK`,
        start_url: `/`,
        background_color: `#ed418e`,
        theme_color: `#ed418e`,
        display: `minimal-ui`,
        icon: `src/images/logos/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/auditions/`,
          `/contact/`,
          `/faq/`,
          `/meet-the-mpk/`,
          `/music/`,
          `/personal-videos/`,
          `/pop-star-programs/`,
          `/privacy-policy/`,
          `/terms-conditions/`,
          `/vip-process/`,
          `/walmartcanada/`,
        ],
      },
    },
  ],
}
