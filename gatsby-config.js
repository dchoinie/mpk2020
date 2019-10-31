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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Fredoka One", "Open Sans"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ed418e`,
        theme_color: `#ed418e`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo-vertical.png`, // This path is relative to the root of the site.
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
        ],
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: "minipopkids",

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,

        // Number of records to fetch on each request when building the cache
        // at startup. If your application encounters timeout errors during
        // startup, try decreasing this number.
        paginationSize: 250,

        // List of collections you want to fetch.
        // Possible values are: 'shop' and 'content'.
        // Defaults to ['shop', 'content'].
        includeCollections: ["shop", "content"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
