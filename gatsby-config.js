/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const path = require('path')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Expert Construction - Etna, OH - Mays-Wilson Construction Company, LLC"
  },
  plugins: [
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          // disableMinification: true
        }
      }
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Roboto:300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }, 'gatsby-plugin-react-helmet', 'gatsby-transformer-sharp', 'gatsby-plugin-sharp'
  ],
}
