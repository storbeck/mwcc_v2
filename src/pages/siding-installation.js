import React from "react"
import { Typography, Container } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { withStyles } from "@material-ui/styles"

// Internal Components
import Layout from "../components/layout"
import Split from "../components/split"
import ImageContainer from "../components/imagecontainer"
import Darken from "../components/darken"

// Images
import sidingMainImg from "../images/siding-main.jpg"
import topdownImg from "../images/topdown.jpg"
import generalContractor1Img from "../images/generalContractor1.jpg"
import generalContractor2Img from "../images/generalContractor2.jpg"
import generalContractor3Img from "../images/generalContractor3.jpg"

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
})

const SidingInstallation = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                Professional Siding{" "}
                </span>{" "}
                Installation
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
              <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, offers <strong>siding installation and 
              repair service</strong> to the Central Ohio area. Our team offers the finest vinyl siding 
              products available on the market. Whether you’re looking to enhance the look of your 
              house, increase your home's resale value or perform repairs, our qualified and experienced 
              contractors can help you determine the best option to fit your needs and budget. Give us 
              a call today to learn more. We can be reached at <Link href="tel:614-532-3026">614-532-3026</Link>.
              </Typography>
            </article>
            <div className={classes.image}>
              <ImageContainer
                image={sidingMainImg}
                alt="Roofing Installation — Etna, OH — Mays-Wilson Construction Company, LLC"
              />
            </div>
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
                We offer high-quality siding in a wide variety of styles, colors and trims, including:
              </Typography>
              <Split />
            </div>
            <Typography variant="p" component="p" style={{ color: "white" }}>
            <strong>Mays-Wilson Construction Company, LLC</strong> offers <strong>siding installation and repair service</strong> for your 
            home or business. Residing your home with vinyl siding is a very smart investment. When 
            compared to all other siding or cladding, it has the lowest installed cost (both in materials and labor) 
            and unlike other cladding, vinyl siding does not need any additional investment over the life of the 
            product. There is no cost to paint, caulk, or refinish every few years like you might have to do with wood, 
            fiber cement, or other prefabricated products on the market. We offer the following options for siding:
            </Typography>
            <br />
            <Typography variant="p" component="p" style={{ color: "white" }}>
              <ul>
                <li>HardiPlank and HardiPanel</li>
                <li>Engineered or Composite Wood</li>
                <li>Vinyl</li>
                <li>Wood Clapboard</li>
                <li>And More</li>
              </ul>
            </Typography>
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
          <img src={generalContractor1Img} alt="General Contractor" className={classes.footerImg} />
          <img src={generalContractor2Img} alt="General Contractor" className={classes.footerImg} />
          <img src={generalContractor3Img} alt="General Contractor" className={classes.footerImg} />
        </section>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(SidingInstallation)
