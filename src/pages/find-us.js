import React from "react"
import { Typography, Button, Container, FormControl, TextField, Input, InputLabel } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { withStyles } from "@material-ui/styles"

// Internal Components
import Layout from "../components/layout"
import Split from "../components/split"
import ImageContainer from "../components/imagecontainer"
import Darken from "../components/darken"

// Images
import contactUsMainImg from "../images/contact-us-main.jpg"
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
  teamContainer: {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  teamItem: {
    height: 180,
    backgroundColor: 'white',
    borderBottom: '5px solid rgb(4, 76, 146)',
    padding: 20
  }
})

const FindUs = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <article className={classes.text}>
              <Typography variant="h3" component="h2" style={{ marginTop: 40 }}>
                <span className={classes.highlight}>
                Contact Our{" "}
                </span>{" "}
                Team Today
              </Typography>
              <Split dark={true} />
              <Typography variant="p" component="p">
                <strong>Mays-Wilson Construction Company, LLC</strong>  can be reached at <Link href="tel:614-532-3026">614-532-3026</Link>.
                <br /><br />
                Have an emergency? Contact us 24/7 for <strong>emergency services</strong> at any time by texting or calling <Link href="tel:614-208-0549">614-208-0549</Link>.
                <br /><br />
                Email:
                <br />
                <Link href="mailto:office@mayswilson.com">office@mayswilson.com</Link>
              </Typography>
            </article>
            <div className={classes.image}>
              <ImageContainer
                image={contactUsMainImg}
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
            <div className={classes.teamContainer}>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Mitch Wilson</Typography>
                    <Typography variant="h6" component="h6">General Manager</Typography>
                    <Typography variant="h6" component="h6">mitch@mayswilson.com</Typography>
                    <Typography variant="h6" component="h6">614-208-0549</Typography>
                </div>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Chad Mays</Typography>
                    <Typography variant="h6" component="h6">Owner</Typography>
                    <Typography variant="h6" component="h6">chad@mayswilson.com</Typography>
                    <Typography variant="h6" component="h6">614-477-2272</Typography>
                </div>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Brad Mays</Typography>
                    <Typography variant="h6" component="h6">In-house Estimation/Project Manager</Typography>
                    <Typography variant="h6" component="h6">brad@mayswilson.com</Typography>
                    <Typography variant="h6" component="h6">614-560-5595</Typography>
                </div>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Greg Becker</Typography>
                    <Typography variant="h6" component="h6">Lead Craftsman/Estimator</Typography>
                    <Typography variant="h6" component="h6">greg@mayswilson.com</Typography>
                    <Typography variant="h6" component="h6">512-299-8344</Typography>
                </div>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Chelsea Mays</Typography>
                    <Typography variant="h6" component="h6">Financial Manager</Typography>
                    <Typography variant="h6" component="h6">chelsea@mayswilson.com</Typography>
                    <Typography variant="h6" component="h6">614-648-4042</Typography>
                </div>
                <div className={classes.teamItem}>
                    <Typography variant="h6" component="h6">Mark Lucas</Typography>
                    <Typography variant="h6" component="h6">Production Manager/Project Consultant</Typography>
                    <Typography variant="h6" component="h6">mark@mayswilson</Typography>
                    <Typography variant="h6" component="h6">614-588-5238</Typography>
                </div>
            </div>
          </div>
        </Container>
        <Container style={{ margin: "100px auto", textAlign: "center" }}>
          <article>
            <Typography variant="h5" component="h2" style={{ marginTop: 40 }}>
              Contact Form
            </Typography>
            <Split dark={true} />
            <form action="https://formspree.io/f/xknpeovk" method="POST">
                <div>
                    <FormControl style={{width: '70%'}}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" name="Name" aria-describedby="name" />
                    </FormControl>
                </div>
                <div>
                    <FormControl style={{width: 'calc(35% - 30px)', marginRight: 60}}>
                        <InputLabel htmlFor="phone">Phone</InputLabel>
                        <Input id="phone" name="Phone Number" aria-describedby="phone" />
                    </FormControl>
                    <FormControl style={{width: 'calc(35% - 30px)'}}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" name="Email" aria-describedby="email" />
                    </FormControl>
                </div>
                <div>
                    <FormControl style={{width: '70%'}}>
                        <TextField rows={4} name="Message" rowsMax={6} id="message" label="Message" aria-describedby="message" multiline />
                    </FormControl>
                </div>
                <Button variant="contained" size="large" style={{marginTop: 10}} color="primary" type="submit">Send</Button>
            </form>
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

export default withStyles(styles)(FindUs)
