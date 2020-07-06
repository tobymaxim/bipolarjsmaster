const myCustomQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: `BIPØLAR. Berlin`,
    description: `Art & Techno Collective`,
    author: `@admin`,
    siteUrl: `https://bipolar.berlin`
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
      resolve: "gatsby-plugin-breakpoints",
      options: {
          queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "54499171.swh.strato-hosting.eu/bipolarjs",
        protocol: "http",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://www.using-wordpress-with-gatsby.iamtimsmith.com",
          replacementUrl: "https://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/*/*/menus", // <== Menu api endpoint
          "**/*/*/menu-locations", // <== Menu api endpoint
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-soundcloud",
          options: {
            width: 800,
            height: 400, 
          }
        }
        ]
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `bipolar.berlin`,
      },
    },
    {
      resolve: "gatsby-source-tribe-events",
      options: {
        // baseUrl should include the protocol (https or http)
        baseUrl: "http://54499171.swh.strato-hosting.eu/bipolarjs/",
      }
    },
    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-102210248-1",
      },
    },
    `gatsby-plugin-client-side-redirect`,
  ],
}