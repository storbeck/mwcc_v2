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

const RoofingInstallation = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                Residential and Commercial{" "}
                </span>{" "}
                Roof Repairs
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
              <strong>Mays-Wilson Construction Company, LLC</strong> in <strong>Etna, OH</strong>, offers experienced
               <strong>residential and commercial roof repair</strong>. We always keep up to date on zoning laws, 
               building permit requirements, and all homeowners association guidelines, so you can be sure we will 
               get the job done right the first time, on time, and will work with your budget. We use an experienced 
               team, quality products, and we believe in integrity, quality, and customer focus. We are not happy 
               unless you are happy! Give our qualified team a call today at <strong>614-532-3026</strong> and ask for a no-obligation quote.
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
                Expert Roof Repair Service for Your Home or Business
              </Typography>
              <Split />
            </div>
            <Typography variant="p" component="p" style={{ color: "white" }}>
            <strong>Mays-Wilson Construction Company, LLC</strong> is ready to help with all of your roofing needs. 
            It's important to make sure your roof is free of any damage or issues. Leaks, drainage, 
            and natural wear and tear in your commercial roof will put your property and assets at high 
            risk. For business owners in Ohio, it’s crucial to have a roofing system and commercial 
            space that will keep your employees, tenants, and valuable assets, safe and secure no matter 
            what. Mays-Wilson Construction Company, LLC understands your specific needs and concerns 
            and we are here to help guide you through the process of finding a custom-tailored commercial 
            roofing solution. We promise to always provide excellent service from start to finish, no 
            matter how large or small your roofing project might be.
            <br />
            Give our team a call today to discuss your options.
            </Typography>
            <br />
            <Typography variant="p" component="p" style={{ color: "white" }}>
            Our Columbus and Central Ohio services include: Emergency Roof repair, Hail Damage Repair, Roof Leak Repair, Wind Damage Roof Repair and Roof Inspections.
              <br />
              <ul>
                <li>Residential and commercial roofing repair</li>
                <li>Re-roofing</li>
                <li>Certified roof inspections</li>
                <li>Roof repair</li>
                <li>And More</li>
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
          <img src={generalContractor1Img} className={classes.footerImg} />
          <img src={generalContractor2Img} className={classes.footerImg} />
          <img src={generalContractor3Img} className={classes.footerImg} />
        </section>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(RoofingInstallation)
