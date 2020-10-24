import React from "react"
import { Typography, Container } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { withStyles } from "@material-ui/styles"

// Internal Components
import Layout from "../components/layout"
import Split from "../components/split"
import Darken from "../components/darken"

// Images
import topdownImg from "../images/topdown.jpg"
import generalContractor1Img from "../images/generalContractor1.jpg"
import generalContractor2Img from "../images/generalContractor2.jpg"
import generalContractor3Img from "../images/generalContractor3.jpg"
import proj1 from "../images/projects/proj1.jpg"
import proj2 from "../images/projects/proj2.jpg"
import proj3 from "../images/projects/proj3.jpg"
import proj4 from "../images/projects/proj4.jpg"
import proj5 from "../images/projects/proj5.jpg"
import proj6 from "../images/projects/proj6.jpg"
import proj7 from "../images/projects/proj7.jpg"
import proj8 from "../images/projects/proj8.jpg"
import proj9 from "../images/projects/proj9.jpg"

const styles = theme => ({
  root: {
    marginTop: 170,
    [theme.breakpoints.up("md")]: {
      marginTop: 40,
    },
  },
  highlight: {
    color: 'rgb(4, 76, 146)',
  },
  section: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%",
    },
  },
  sectionTitle: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
    },
  },
  image: {
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginLeft: 20,
    },
  },
  text: {
    [theme.breakpoints.up("md")]: {
      width: "60%",
      marginRight: 20,
    },
  },
  imagesContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up("md")]: {
        // margin: "0 auto",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
      }
  },
  footerImg: {
      width: '100%',
      margin: '10px 0',
    [theme.breakpoints.up("md")]: {
        margin: 10,
        width: "30%",
    }
  },
  galleryContainer: {
    display: 'grid',
    gridGap: 5,
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  galleryImg: {
    maxWidth: 300,
    height: 300,
    border: '1px solid white',
    objectFit: 'cover'
  }
})

const PhotoGallery = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                View Our{" "}
                </span>{" "}
                Photos
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
              <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, invites 
              you to view some of our recent projects below.
              </Typography>
            </article>
          </div>
        </Container>
        <Container
          style={{
            backgroundImage: `url(${topdownImg})`,
            backgroundSize: "cover",
            marginTop: 40,
            paddingBottom: 90,
            backgroundPosition: "50% 50%",
            position: "relative",
          }}
        >
          <Darken />
          <Darken />
          <div style={{ zIndex: 0, position: "relative"}}>
            <div className={classes.sectionTitle} style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                component="h2"
                style={{ color: "white", paddingTop: 40 }}
              >
                Our Past Projects
              </Typography>
              <Split />
            </div>
            <Typography variant="p" component="p" style={{ color: "white" }}>
            <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, believes 
            in only using the best products on the market to increase the life of any product we install 
            for your home or business. We work with brands that we trust and know will last longer than other 
            products on the market.

            </Typography>
            <br />
            <div className={classes.galleryContainer}>
                <div className={classes.galleryImg}>
                    <img className={classes.galleryImg} alt="Gallery: Inspection" src={proj1} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Materials" src={proj2} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Completed" src={proj3} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Crane" src={proj4} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Materials 2" src={proj5} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Trucks" src={proj6} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Removal" src={proj7} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Installation" src={proj8} />
                </div>
                <div className={classes.galleryimg}>
                    <img className={classes.galleryImg} alt="Gallery: Safety" src={proj9} />
                </div>
            </div>
          </div>
        </Container>
        <Container style={{ margin: "100px auto", textAlign: "center" }}>
          <article>
            <Typography variant="h5" component="h2" style={{ marginTop: 40 }}>
              Contact Us Today
            </Typography>
            <Split dark={true} />
            <Typography variant="h6" component="p" style={{ marginTop: 10 }}>
              Mays-Wilson Construction Company, LLC can be reached at{" "}
              <Link href="tel:614-532-3026">614-532-3026</Link>.
            </Typography>
            <Typography variant="h6" component="p" style={{ marginTop: 10 }}>
              Have an{" "}
              <span
                style={{ fontStyle: "italic" }}
                className={classes.highlight}
              >
                emergency
              </span>
              ?
            </Typography>
            <Typography variant="h6" component="p" style={{ marginTop: 10 }}>
              24-hour emergency service﻿ call or text{" "}
              <Link href="tel:614-208-0549">614-208-0549</Link>.
            </Typography>
          </article>
        </Container>
        <section className={classes.imagesContainer}>
          <img src={generalContractor1Img} alt="General Contractrator" className={classes.footerImg} />
          <img src={generalContractor2Img} alt="General Contractrator" className={classes.footerImg} />
          <img src={generalContractor3Img} alt="General Contractrator" className={classes.footerImg} />
        </section>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(PhotoGallery)
