import React from "react"
import {Typography, Button, Container, Paper} from "@material-ui/core"
import {Link} from "gatsby-theme-material-ui"
import Carousel from 'react-material-ui-carousel'
import styled from 'styled-components'

// Internal Components
import Layout from '../components/layout'
import Split from '../components/split'
import Hero from '../components/hero'
import ImageContainer from '../components/imagecontainer'
import QuickLinks from '../components/quicklinks'
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

const Highlight = styled.span`
 color: rgb(4, 76, 146);
`

const ServicesBox = styled.div`
  width: 150px;
  height: 150px;
  background-position: center;
  float: left;
  margin: 10px;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(4, 76, 146, .6);
  }

  span {
    color: white;
    position: relative;
    z-index: 0;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0 0 2px black;
  }
`
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

export default function Home() {
  return (
    <Layout>
      <Hero img={heroImg}>
        <Darken />
        <Typography variant="h4" component="h1">INTEGRITY - QUALITY - CUSTOMER FOCUS</Typography>
        <Button component={Link} variant="contained" color="primary" size="large" href="tel:614-532-3026">CALL TODAY FOR A NO OBLIGATION QUOTE</Button>
      </Hero>
      <Container>
        <Typography variant="h5" component="h2" style={{marginTop: 40}}><Highlight>Property Restoration</Highlight> Experts!</Typography>
        <Split dark={true} />
        <Typography variant="p" component="p"><strong>Mays-Wilson Construction Company, LLC in Columbus, Ohio </strong> is a locally owned, general contracting company that specializes in home improvement projects including roofing, siding, gutters, and remodeling. We’ve served the Columbus Ohio and surrounding areas for a combined 35+ years. It is our goal to provide every homeowner with the best possible service and products. Our values include <strong>integrity, quality,</strong> and <strong>customer focus</strong> and with these values, we ensure that each and every homeowner and home is treated with deserved respect and diligence. </Typography>
        <br />
        <Typography variant="p" component="p">Proudly serving the communities of Columbus, Powell, Westerville, Lewis Center,  Gahanna, Galena, Dublin, Upper Arlington,  New Albany, Pickerington, Reynoldsburg, Grove City, Groveport, Pataskala, Worthington, Clintonville, Hilliard, Sunbury, Canal Winchester, Granville, Plain City, Blacklick, Grandview Heights, Bexley, Johnstown and Franklin, Delaware and Licking Counties.</Typography>
        <ImageContainer image={roofRepairImg} alt="Roof Repair — Etna, OH — Mays-Wilson Construction Company, LLC" />
      </Container>
      <Container style={{backgroundImage: `url(${topdownImg})`, backgroundSize: 'cover', marginTop: 40, backgroundPosition: '50% 50%', height: 900, position: "relative"}}>
        <Darken /><Darken />
        <div style={{zIndex: 0, position: "relative"}}>
          <Typography variant="h5" component="h2" style={{color: "white", paddingTop: 40}}>Our Services</Typography>
          <Split />
          <ServicesBox style={{backgroundImage: `url(${residentialAndCommercialRoofingImg})`}}><span>Residential and Commercial Roofing</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${roofingRepairAndInstallationImg})`}}><span>Roofing Repair and Installation</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${gutterInstallationImg})`}}><span>Gutter Installation</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${sidingInstallationImg})`}}><span>Siding Installation</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${propertyRestorationImg})`}}><span>Property Restoration</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${insulationImg})`}}><span>Insulation</span></ServicesBox>
          <ServicesBox style={{backgroundImage: `url(${andMoreImg})`}}><span>And More</span></ServicesBox>
        </div>
      </Container>
      <Container>
        <ImageContainer flipped={true} image={whyMaysWilsonImg} alt="Roof Repair — Etna, OH — Mays-Wilson Construction Company, LLC" />
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
      </Container>
      <Container>
        <Typography variant="h5" component="h2" style={{marginTop: 40}}>Meet the Team</Typography>
        <Split dark={true} />
        <section>
          <Typography variant="h6" component="h3" style={{marginTop: 40}}>Chad Mays</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}>Chad has over 20 years of experience in interior and exterior home improvement and remodeling. Born and raised in Columbus, Ohio, he has the utmost love for his community and desires to improve it one house at a time. “It is my goal to assist each and every homeowner with maintaining a safe and beautiful home.”</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:chad@mayswilson.com">chad@mayswilson.com</Link></Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 477-2272">(614) 477-2272</Link></Typography>
        </section>
        <section>
          <Typography variant="h6" component="h3" style={{marginTop: 40}}>Mitch Wilson</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}>Mitch has 5 years of experience in home repair and remodeling and 10 years of experience in manufacturing. Also born and raised in Columbus, Mitch has always appreciated the beauty and diversity that Columbus holds. Like Chad, Mitch exudes honesty and integrity and shares the goal to “improve Columbus and its homes and provide a safer and more beautiful community.”</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:mitch@mayswilson.com">mitch@mayswilson.com</Link></Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 208-0549">(614) 208-0549</Link></Typography>
        </section>
        <section>
          <Typography variant="h6" component="h3" style={{marginTop: 40}}>Brad Mays</Typography>
          <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>In-House Estimation/Project Manager</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:brad@mayswilson.com">brad@mayswilson.com</Link></Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 560-5595">(614) 560-5595</Link></Typography>
        </section>
        <section>
          <Typography variant="h6" component="h3" style={{marginTop: 40}}>Greg Becker</Typography>
          <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>Lead Craftsman/Estimator</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:greg@mayswilson.com">greg@mayswilson.com</Link></Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(512) 299-8344">(512) 299-8344</Link></Typography>
        </section>
        <section>
          <Typography variant="h6" component="h3" style={{marginTop: 40}}>Chelsea Mays</Typography>
          <Typography variant="subtitle2" component="h5" style={{marginTop: 10}}>Financial Manager</Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="mailto:chelsea@mayswilson.com">chelsea@mayswilson.com</Link></Typography>
          <Typography variant="body2" component="p" style={{marginTop: 10}}><Link href="tel:(614) 648-4042">(614) 648-4042</Link></Typography>
        </section>
      </Container>
      <Container style={{backgroundImage: `url(${ourReviewsImg})`, backgroundSize: 'cover', marginTop: 40, backgroundPosition: '50% 50%', paddingBottom: 50, position: "relative"}}>
        <Darken blue={true} />
        <div style={{position: "relative"}}>
          <Typography variant="h5" component="h2" style={{color: "white", paddingTop: 40}}>Our Reviews</Typography>
          <Split />
          <div style={{height: 450}}>
            <Carousel navButtonsAlwaysInvisible={true} interval={10000}>
              {
                  items.map( (item, i) => <Item key={i} item={item} /> )
              }
            </Carousel>
          </div>
          <iframe 
            name="f38ff92088a7044" 
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
      </Container>
      <Container>
        <Typography variant="h5" component="h2" style={{marginTop: 40}}>Contact Us Today</Typography>
        <Split dark={true} />
        <Typography variant="p" component="p">
          Mays-Wilson Construction Company, LLC in Etna, OH, can be reached at <Link href="tel:614-532-3026">614-532-3026</Link>. For 24-Hour emergency service call or text <Link href="tel:614-208-0549">614-208-0549</Link>.
        </Typography>
      </Container>
      <QuickLinks />
    </Layout>
  )
}
