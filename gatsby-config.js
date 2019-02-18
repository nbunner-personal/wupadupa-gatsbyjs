module.exports = {
  siteMetadata: {
    title: `Wupadupa`,
    description: `Wupadupa - a collective of musicians who put on evenings of quality entertainment with the best music, visuals, comfy cusions and free cake around`,
    author: `@wupadupa`,
    url: "https://www.wupadupa.com",
    twitterUsername: "@wupadupa"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Denk One"]
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 554,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 311, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
          "gatsby-remark-responsive-iframe"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wupadupa`,
        short_name: `Wupadupa`,
        start_url: `/`,
        background_color: `#c3d5da`,
        theme_color: `#c3d5da`,
        display: `minimal-ui`,
        icon: `src/images/wupadupa-logo.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline"
  ]
};
