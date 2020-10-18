/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const path = require('path')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Expert Construction - Etna, OH - Mays-Wilson Construction Company, LLC",
    description: "This is where I write my thoughts.",
    links: [
      { name: 'Home', route: '/' },
      { name: 'Our Process', route: '/general-contractor' },
      { name: 'Residential Roofing', route: '/roofing-installation' },
      { name: 'Commercial Roof Repairs', route: '/roofing-repair' },
      { name: 'Gutters', route: '/gutter-installation' },
      { name: 'Siding', route: '/siding-installation' },
      { name: 'Products', route: '/our-brands' },
      { name: 'Project Gallery', route: '/photo-gallery' },
      { name: 'Contact Us Today!', route: '/find-us' },
    ]
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
