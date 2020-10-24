import React from "react"
import { Typography, Button, Container } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { withStyles } from "@material-ui/styles"

// Internal Components
import Layout from "../components/layout"
import Split from "../components/split"
import ImageContainer from "../components/imagecontainer"
import Darken from "../components/darken"

// Images
import generalContractorImg from "../images/general_contractor.jpg"
import topdownImg from "../images/topdown.jpg"
import insuranceRestorationExpertsImg from "../images/insuranceRestorationExperts.jpg"
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

const GutterInstallation = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                Experienced Gutter{" "}
                </span>{" "}
                Installation Service
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
                When building a new home, gutters are a necessity to divert the rain from your 
                roof away from your home to avoid structure damage, damp walls, and also mold. 
                When you currently have gutters, it’s important to replace any that might be leaking, 
                as leaks can cause rotten fascia boards. When installing or replacing gutters, it is 
                also important to use a company with experience in gutter installation service. Issues 
                at installation, such as incorrect pitch, can cause the problems you are trying to avoid, 
                so hire a team that will get the job done right the first time! <strong>Mays-Wilson Construction 
                Company, LLC</strong> in Columbus, Ohio has years of experience with <strong>gutter installation</strong> is evident 
                at every job. Our professionally trained installers are dedicated to 100% customer satisfaction, 
                and we use only the best gutter products on the market.
                <br />
                Let our experienced staff assist you today? Call 614-532-3026 for an estimate or schedule via our website 24/7.
              </Typography>
            </article>
            <div className={classes.image}>
              <ImageContainer
                image={generalContractorImg}
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
                Gutter Repair and Installation
              </Typography>
              <Split />
            </div>
            <Typography variant="p" component="p" style={{ color: "white" }}>
            Many people think that gutters don't play an important role for your home or office. 
            But most people might not realize is that your home or business's gutters will protect 
            your foundation, prevent erosion, protect landscaping, and prevent possible basement 
            flooding. They will also prevent staining to the exterior of your home or business, 
            mitigate possible paint damage, and can stop mold and mildew growth. It's important 
            to have a gutter system in good working condition. If you are in need of high-quality 
            gutters at competitive prices, give Mays-Wilson Construction Company, LLC a call today! 
            We can help with repairs and new installations.
            </Typography>
            <br />
            <Typography variant="p" component="p" style={{ color: "white" }}>
              <ul>
                <li>Residential And Gutter Installation</li>
                <li>High-quality Gutter Products</li>
                <li>Residential And Commercial Gutter Repair</li>
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
          <img src={generalContractor1Img} className={classes.footerImg} />
          <img src={generalContractor2Img} className={classes.footerImg} />
          <img src={generalContractor3Img} className={classes.footerImg} />
        </section>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(GutterInstallation)
