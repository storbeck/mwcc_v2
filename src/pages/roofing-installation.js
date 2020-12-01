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
import residentialRoofingImg from "../images/residential-roofing-main.jpg"
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

const RoofingInstallation = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                Residential Roof Installation Serving{" "}
                </span>{" "}
                the Columbus & Central Ohio Area
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
              <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, are experts when 
              it comes to <strong>residential roofing service</strong>. We can help with tile roofing, 
              composite roofing, stone coated steel, asphalt shingles, synthetic shingles, 
              and everything in between. After any type of storm, it's important to 
              have your roof inspected and repaired as quickly as possible. We are 
              the storm damage experts and will work with your insurance to help make 
              the process as smooth as possible. Give our experts a call today at <strong>614-532-3026</strong>. 
              Ask for a no-obligation quote when you call.
              </Typography>
            </article>
            <div className={classes.image}>
              <ImageContainer
                image={residentialRoofingImg}
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
                Expert Residential Roofing Service
              </Typography>
              <Split />
            </div>
            <Typography variant="p" component="p" style={{ color: "white" }}>
              <strong>The Team at Mays-Wilson Construction Company, LLC</strong> serving Columbus, Ohio are 
              storm damage experts and can help you, especially after any damage due to bad 
              storms including hail and high winds. It's important to have your roof 
              inspected to get it repaired as quickly as possible to avoid further damage. 
              We have an experience team ready to help you. We are available 24/7 for emergency 
              roof repair. Any of our expert roof repair services you utilize is a step in the
              right direction - we have you covered! Our team will assist you with repairing 
              any roof-related issues which include issues with leaks, loose supports, damaged 
              or loose tiles, and insulation among other areas of concern. Our skill crew will 
              work on every part of your roof and will not stop until we are confident your roof 
              is complete and secured.
            </Typography>
            <br />
            <Typography variant="h6" component="h3" style={{color: "white"}}>
              Mays-Wilson is Your Emergency Roof Repair Company in Columbus, Ohio and Central Ohio
            </Typography>
            <br />
            <Typography variant="p" component="p" style={{ color: "white" }}>
              You may notice that your roof is leaking, or that shingles have come loose or maybe 
              there are some shingles missing from your roof.. Whatever the cause, having one of the
              professional roofers at Mays-Wilson look at your roof is the best way to put your mind 
              at ease and protect your most valuable asset, your home.
            </Typography>
            <br />
            <Typography variant="p" component="p" style={{ color: "white" }}>
              Our emergency roofing repair experts at Mays-Wilson can help you with the following issues.
              <br />
              <ul>
                <li><strong>Storm damage/Emergency Roof Repair:</strong> If high winds, or hail has damaged your shingles, we can quickly repair the problem.</li>
                <li><strong>Hail damage:</strong> Shingle damage due to hailstone impacts are more common that you think, and can cause serious water damage to your home – not to worry, though, we know just how to fix it!</li>
                <li><strong>Age-related damages:</strong> Roofing shingles have a lifespan of 10-20 years in most cases. If your roofing shingles have begun to fail, you may notice wood rotting or roofing leaks, along with roofing granules in you're finding in your gutters or downspouts.</li>
                <li><strong>Tree damage:</strong> Nobody likes to see a tree limb damage their home. The professionals at Mays-Wilson can quickly repair roofing damage caused by tree limbs.</li>
              </ul>
              <br />
              Mays-Wilson proudly serves the entire Columbus, Ohio area, as well as, Upper Arlington, Dublin, Worthington, Bexley, Hilliard, Powell, Lewis Center, Galena, New Albany, Gahanna, Westerville, Grandview, Grove City, Pickerington, Delaware, Reynoldsburg, Clintonville, Canal Winchester, Pataskala, Etna and all communities throughout Central Ohio.
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

export default withStyles(styles)(RoofingInstallation)
