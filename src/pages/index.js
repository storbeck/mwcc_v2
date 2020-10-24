import React from "react"
import {Typography, Button, Container} from "@material-ui/core"
import {Link} from "gatsby-theme-material-ui"
import Carousel from 'react-material-ui-carousel'
import {withStyles} from '@material-ui/styles'

// Internal Components
import Layout from '../components/layout'
import Split from '../components/split'
import ImageContainer from '../components/imagecontainer'
import Darken from '../components/darken'

// Images
import heroImg from '../images/hero.jpg'
import roofRepairImg from '../images/roof_repair.jpg'
import topdownImg from '../images/topdown.jpg'
import residentialAndCommercialRoofingImg from '../images/residential_and_commercial_roofing.jpg'
import roofingRepairAndInstallationImg from '../images/roofing_repair_and_installation.jpg'
import gutterInstallationImg from '../images/gutter_installation.jpg'
import sidingInstallationImg from '../images/siding_installation.jpg'
import propertyRestorationImg from '../images/property_restoration.jpg'
import insulationImg from '../images/insulation.jpg'
import andMoreImg from '../images/and_more.jpg'
import whyMaysWilsonImg from '../images/why_mays.jpg'
import ourReviewsImg from '../images/our_reviews.jpg'

var items = [
  {
    review: "I highly recommend Mays-Wilson Construction to do your roof repairs. We had wind damage. The insurance adjuster used a drone to view our gable roof. Mitch at Mays-Wilson met the drone on the roof and relayed the damage to the adjuster. Mitch then met with us to select the roofing materials; explain the job and answer our questions. Their people did an excellent job replacing our roof with on site managers supervising the entire installation and cleanup. It’s great using a local company that takes pride in their work. ",
    author: "Rob F."
  }, {
    review: "Care deeply about their customers. Great to work with. Pleasantly surprising results. ",
    author: "Steve W."
  }, {
    review: "6 stars if i could. My insurance company was taking advantage of me and the guys at mays/ wilson handled all the hassle of getting my roof replaced for my deductible. Highly recommend! ",
    author: "Josh S.",
  }, {
    review: "This company cares about its customers. ",
    author: "Jason J.",
  }, {
    review: "Easy to work with, excellent quality work ",
    author: "Mitchell V.",
  }, {
    review: "Mitch, Justin, Chad, Brad and Chelsea (and of course, the crew) were very professional from start to end. The care they took at protecting our home was exceptional. The roof, flashing, drip edge, etc...look great and they handled everything from start (insurance co) to final cleanup and punch list. The quality of the workmanship is top-notch! Even took the time to paint some vent pipes to make them look new. Attention to detail and safety is important to this co. Highly recommend Mays-Wilson ",
    author: "Anthony V.",
  }, {
    review: "big shout out to Chad Mays! i had him come out to do an estimate on a window that i had leaking and he recaulked it for me free of charge! highly recommend. very nice guy ",
    author: "Dawn W."
  }
]

function Item(props)
{
    return (
        <article>
            <Typography variant="subtitle1" component="p" style={{color: "white"}}>{props.item.review}</Typography>
            <Typography variant="subtitle1" component="p" style={{color: "white", marginTop: 10}}> - {props.item.author}</Typography>
        </article>
    )
}

const styles = theme => ({
  highlight: {
    color: theme.palette.primary.main
  },
  section: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '100%',
    },
  },
  sectionTitle: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  image: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
  },
  servicesContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  servicesBox: {
    width: 150,
    height: 150,
    backgroundPosition: 'center',
    float: 'left',
    margin: 10,
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    [theme.breakpoints.up('md')]: {
      flex: '1 0 21%',
      height: 250,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(4, 76, 146, .6)',
    },
  },
  servicesText: {
    color: 'white',
    position: 'relative',
    zIndex: 0,
    fontWeight: 600,
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadow: '0 0 2px black',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3em'
    },
  },
  teamGrid: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  teamGridSection: {
    [theme.breakpoints.up('md')]: {
      flex: '1 0 40%',
      boxShadow: '0 2px 10px rgba(0, 0, 0, .2)',
      margin: 10,
      padding: '5px 20px 20px',
      borderBottom: `5px solid ${theme.palette.primary.main}`
    }
  },
  teamGridSectionName: {
    marginTop: 40,
    [theme.breakpoints.up('md')]: {
      marginTop: 10
    }
  },
  reviews: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  reviewsChild: {
    [theme.breakpoints.up('md')]: {
      margin: 20,
      width: '50%'
    }
  },
  hero: {
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'scroll',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 370,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column'
  },
  heroText: {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 700,
    textShadow: 'rgb(0, 0, 0) 0px 0px 20px',
    marginBottom: 30
  }
})

const Home = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.hero}>
        <Darken />
        <Typography variant="h4" component="h1" className={classes.heroText}>INTEGRITY - QUALITY - CUSTOMER FOCUS</Typography>
        <Button component={Link} variant="contained" color="primary" size="large" href="tel:614-532-3026">CALL TODAY FOR A NO OBLIGATION QUOTE</Button>
      </div>
      <Container>
        <Typography variant="h5" component="h2" style={{marginTop: 40}}><span className={classes.highlight}>Property Restoration</span> Experts!</Typography>
        <Split dark={true} />
        <div className={classes.section}>
          <article className={classes.text}>
            <Typography variant="p" component="p"><strong>Mays-Wilson Construction Company, LLC in Columbus, Ohio </strong> is a locally owned, general contracting company that specializes in home improvement projects including roofing, siding, gutters, and remodeling. We’ve served the Columbus Ohio and surrounding areas for a combined 35+ years. It is our goal to provide every homeowner with the best possible service and products. Our values include <strong>integrity, quality,</strong> and <strong>customer focus</strong> and with these values, we ensure that each and every homeowner and home is treated with deserved respect and diligence. </Typography>
            <br />
            <Typography variant="p" component="p">Proudly serving the communities of Columbus, Powell, Westerville, Lewis Center,  Gahanna, Galena, Dublin, Upper Arlington,  New Albany, Pickerington, Reynoldsburg, Grove City, Groveport, Pataskala, Worthington, Clintonville, Hilliard, Sunbury, Canal Winchester, Granville, Plain City, Blacklick, Grandview Heights, Bexley, Johnstown and Franklin, Delaware and Licking Counties.</Typography>
          </article>
          <div className={classes.image}>
            <ImageContainer image={roofRepairImg} alt="Roof Repair — Etna, OH — Mays-Wilson Construction Company, LLC" />
          </div>
        </div>
      </Container>
      <Container style={{backgroundImage: `url(${topdownImg})`, backgroundSize: 'cover', marginTop: 40, backgroundPosition: '50% 50%', height: 900, position: "relative"}}>
        <Darken /><Darken />
        <div style={{zIndex: 0, position: "relative"}}>
          <div className={classes.sectionTitle}>
            <Typography variant="h5" component="h2" style={{color: "white", paddingTop: 40}}>Our Services</Typography>
            <Split />
          </div>
          <div className={classes.servicesContainer}>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${residentialAndCommercialRoofingImg})`}}>
              <span className={classes.servicesText}>Residential and Commercial Roofing</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${roofingRepairAndInstallationImg})`}}>
              <span className={classes.servicesText}>Roofing Repair and Installation</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${gutterInstallationImg})`}}>
              <span className={classes.servicesText}>Gutter Installation</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${sidingInstallationImg})`}}>
              <span className={classes.servicesText}>Siding Installation</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${propertyRestorationImg})`}}>
              <span className={classes.servicesText}>Property Restoration</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${insulationImg})`}}>
              <span className={classes.servicesText}>Insulation</span>
            </div>
            <div className={classes.servicesBox} style={{backgroundImage: `url(${andMoreImg})`}}>
              <span className={classes.servicesText}>And More</span>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}>
          <div className={classes.image}>
            <ImageContainer flipped={true} image={whyMaysWilsonImg} alt="Roof Repair — Etna, OH — Mays-Wilson Construction Company, LLC" />
          </div>
          <article className={classes.text}>
            <Typography variant="h5" component="h2" style={{marginTop: 40}}>Why Mays-Wilson Construction?</Typography>
            <Split dark={true} />
            <ul>
              <li>No-Obligation Estimates</li>
              <li>Fully Qualified & Insured</li>
              <li>Written Warranties</li>
              <li>References Available</li>
              <li>Over 35+ Combined Experience</li>
              <li>We are storm restoration experts</li>
              <li>BBB Member</li>
              <li>24-Hour Emergency Service</li>
              <li>We Work With Your Insurance</li>
            </ul>
          </article>
        </div>
      </Container>
      <Container>
        <div className={classes.sectionTitle}>
          <Typography variant="h5" component="h2" style={{marginTop: 40}}>Meet the Team</Typography>
          <Split dark={true} />
        </div>
        <div className={classes.teamGrid}>
          <section className={classes.teamGridSection}>
            <Typography variant="h6" component="h3" className={classes.teamGridSectionName}>Chad Mays</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}>Chad has over 20 years of experience in interior and exterior home improvement and remodeling. Born and raised in Columbus, Ohio, he has the utmost love for his community and desires to improve it one house at a time. “It is my goal to assist each and every homeowner with maintaining a safe and beautiful home.”</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:chad@mayswilson.com">chad@mayswilson.com</Link></Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 477-2272">(614) 477-2272</Link></Typography>
          </section>
          <section className={classes.teamGridSection}>
            <Typography variant="h6" component="h3" className={classes.teamGridSectionName}>Mitch Wilson</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}>Mitch has 5 years of experience in home repair and remodeling and 10 years of experience in manufacturing. Also born and raised in Columbus, Mitch has always appreciated the beauty and diversity that Columbus holds. Like Chad, Mitch exudes honesty and integrity and shares the goal to “improve Columbus and its homes and provide a safer and more beautiful community.”</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:mitch@mayswilson.com">mitch@mayswilson.com</Link></Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 208-0549">(614) 208-0549</Link></Typography>
          </section>
          <section className={classes.teamGridSection}>
            <Typography variant="h6" component="h3" className={classes.teamGridSectionName}>Brad Mays</Typography>
            <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>In-House Estimation/Project Manager</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:brad@mayswilson.com">brad@mayswilson.com</Link></Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 560-5595">(614) 560-5595</Link></Typography>
          </section>
        </div>
        <div className={classes.teamGrid}>
          <section className={classes.teamGridSection}>
            <Typography variant="h6" component="h3" className={classes.teamGridSectionName}>Greg Becker</Typography>
            <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>Lead Craftsman/Estimator</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:greg@mayswilson.com">greg@mayswilson.com</Link></Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(512) 299-8344">(512) 299-8344</Link></Typography>
          </section>
          <section className={classes.teamGridSection}>
            <Typography variant="h6" component="h3" className={classes.teamGridSectionName}>Chelsea Mays</Typography>
            <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>Financial Manager</Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:chelsea@mayswilson.com">chelsea@mayswilson.com</Link></Typography>
            <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 648-4042">(614) 648-4042</Link></Typography>
          </section>
        </div>
      </Container>
      <Container style={{backgroundImage: `url(${ourReviewsImg})`, backgroundSize: 'cover', marginTop: 40, backgroundPosition: '50% 50%', paddingBottom: 50, position: "relative"}}>
        <Darken blue={true} />
        <div style={{position: "relative"}}>
          <div className={classes.sectionTitle}>
            <Typography variant="h5" component="h2" style={{color: "white", paddingTop: 40}}>Our Reviews</Typography>
            <Split />
          </div>
          <div className={classes.reviews}>
            <div className={classes.reviewsChild} style={{height: 450}}>
              <Carousel navButtonsAlwaysInvisible={true} interval={10000}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
              </Carousel>
            </div>
            <iframe 
              name="f38ff92088a7044" 
              className={classes.reviewsChild}
              data-testid="fb:page Facebook Social Plugin" 
              title="fb:page Facebook Social Plugin" 
              allowtransparency="true" 
              allowfullscreen="true" 
              scrolling="no" 
              allow="encrypted-media" 
              style={{border: "medium none", visibility: "visible", width: 340, height: 400}}
              src="https://www.facebook.com/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df32888649e998%26domain%3Dwww.mayswilson.com%26origin%3Dhttps%253A%252F%252Fwww.mayswilson.com%252Ff6a2afc5d402c2%26relation%3Dparent.parent&amp;container_width=0&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FMaysWilsonC%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2C%2C"
              width="1000px" 
              height="400px" 
              frameborder="0">
            </iframe>
          </div>
        </div>
      </Container>
      <Container style={{paddingTop: 70, paddingBottom: 70}}>
        <div className={classes.sectionTitle}>
          <Typography variant="h5" component="h2" style={{marginTop: 40}}>Contact Us Today</Typography>
          <Split dark={true} />
          <Typography variant="p" component="p">
            Mays-Wilson Construction Company, LLC in Etna, OH, can be reached at <Link href="tel:614-532-3026">614-532-3026</Link>. For 24-Hour emergency service call or text <Link href="tel:614-208-0549">614-208-0549</Link>.
          </Typography>
        </div>
      </Container>
    </Layout>
  )
}


export default withStyles(styles)(Home)