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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fredoka One`,
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
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
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
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
        // icon: `src/images/logos/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/auditions/`,
          `/contact/`,
          `/dance-at-home/`,
          `/faq/`,
          `/home/`,
          `/meet-the-mpk/`,
          `/music/`,
          `/personal-videos/`,
          `/pop-star-programs/`,
          `/privacy-policy/`,
          `/terms-conditions/`,
          `/tour/`,
          `/videos/`,
          `/vip-process/`,
          `/walmartcanada/`,
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     // The domain name of your Shopify shop. This is required.
    //     // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
    //     // 'gatsby-source-shopify-test-shop.myshopify.com'.
    //     shopName: "minipopkids",

    //     // An API access token to your Shopify shop. This is required.
    //     // You can generate an access token in the "Manage private apps" section
    //     // of your shop's Apps settings. In the Storefront API section, be sure
    //     // to select "Allow this app to access your storefront data using the
    //     // Storefront API".
    //     // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
    //     accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,

    //     // Set verbose to true to display a verbose output on `npm run develop`
    //     // or `npm run build`. This prints which nodes are being fetched and how
    //     // much time was required to fetch and process the data.
    //     // Defaults to true.
    //     verbose: true,

    //     // Number of records to fetch on each request when building the cache
    //     // at startup. If your application encounters timeout errors during
    //     // startup, try decreasing this number.
    //     paginationSize: 250,

    //     // List of collections you want to fetch.
    //     // Possible values are: 'shop' and 'content'.
    //     // Defaults to ['shop', 'content'].
    //     includeCollections: ["shop", "content"],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
