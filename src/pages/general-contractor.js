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

const GeneralContractor = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                  General Contractor Serving the{" "}
                </span>{" "}
                Central Ohio Area
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
                <strong>
                  Mays-Wilson Construction Company, LLC in Columbus, Ohio{" "}
                </strong>{" "}
                serving the Columbus Ohio area, is a family-owned and operated
                company and our main goal to provide our customers with
                outstanding service and quality products. We operate with family
                and home in mind, knowing a house is not just a house, but a
                home where love and family grows. It is our dedication to caring
                for our customers’ homes as if they were our own.
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
          <div style={{ zIndex: 0, position: "relative", textAlign: "center" }}>
            <div className={classes.sectionTitle}>
              <Typography
                variant="h5"
                component="h2"
                style={{ color: "white", paddingTop: 40 }}
              >
                Turnkey Solutions
              </Typography>
              <Split />
            </div>
            <span style={{ color: "white" }}>
              We offer turnkey solutions so you can start generating income as
              quickly as possible! If you purchased a home and need repairs done
              quickly, we can help restore any property with our renovation and
              repair experts. Property restoration is our specialty. If you are
              looking for more information give our team a call today.
            </span>
          </div>
        </Container>
        <Container style={{ marginTop: 40 }}>
          <div className={classes.section}>
            <div className={classes.image}>
              <ImageContainer
                flipped={true}
                image={insuranceRestorationExpertsImg}
                alt="Roof Repair — Etna, OH — Mays-Wilson Construction Company, LLC"
              />
            </div>
            <article className={classes.text}>
              <Typography variant="h5" component="h2" style={{ marginTop: 40 }}>
                Insurance Restoration Experts
              </Typography>
              <Split dark={true} />
              <ul>
                <li>
                  Experienced working with insurance adjusters scope of work
                </li>
                <li>Offer Roof Inspections﻿</li>
                <li>
                  Offer 24-Hour Emergency Service to prevent and mitigate
                  further damage
                </li>
              </ul>
            </article>
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

export default withStyles(styles)(GeneralContractor)
