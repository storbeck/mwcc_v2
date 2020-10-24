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
import productsMainImg from "../images/products-main.jpg"
import topdownImg from "../images/topdown.jpg"
import generalContractor1Img from "../images/generalContractor1.jpg"
import generalContractor2Img from "../images/generalContractor2.jpg"
import generalContractor3Img from "../images/generalContractor3.jpg"
import certainteedImg from "../images/brands/certainteed.jpg"
import gafImg from "../images/brands/gaf.jpg"
import ikoImg from "../images/brands/iko.jpg"
import owensCorningImg from "../images/brands/owens_corning.jpg"
import qualityEdgeImg from "../images/brands/quality_edge.jpg"
import simontonImg from "../images/brands/simonton.jpg"

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
  brandContainer: {
    display: 'flex',
    textAlign: 'center'
  },
  brandBlock: {
    margin: 10,
    height: 200,
    backgroundColor: 'white',
    maxWidth: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandImg: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  brandText: {
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'white',
      fontSize: '1.2em'
  }
})

const OurBrands = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                High-Quality{" "}
                </span>{" "}
                Products
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
              <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, believes 
              in using the highest quality products such as <strong>Certainteed, IKO, Owens Corning, and more.</strong> 
              We have samples of all of our products and can help determine which product would work best for 
              you. We are happy to work with any product of your choice if you are not satisfied with the brands 
              listed below. If you are interested in seeing physical samples of our preferred manufacturers’ 
              products, please leave your information on our contact page.
              </Typography>
            </article>
            <div className={classes.image}>
              <ImageContainer
                image={productsMainImg}
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
                Vendors We Work With
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
            <div className={classes.brandContainer}>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={certainteedImg} alt='CertainTeed' />
                    </div>
                    <span className={classes.brandText}>
                        CertainTeed
                    </span>
                </div>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={ikoImg} alt='IKO' />
                    </div>
                    <span className={classes.brandText}>
                        IKO
                    </span>
                </div>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={gafImg} alt='GAF' />
                    </div>
                    <span className={classes.brandText}>
                        GAF
                    </span>
                </div>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={owensCorningImg} alt='Owens Corning' />
                    </div>
                    <span className={classes.brandText}>
                        Owens Corning
                    </span>
                </div>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={simontonImg} alt='Simonton' />
                    </div>
                    <span className={classes.brandText}>
                        Simonton
                    </span>
                </div>
                <div>
                    <div className={classes.brandBlock}>
                        <img className={classes.brandImg} src={qualityEdgeImg} alt='Quality Edge' />
                    </div>
                    <span className={classes.brandText}>
                        Quality Edge
                    </span>
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

export default withStyles(styles)(OurBrands)
