import React from "react"
import { Typography, Link } from "@material-ui/core"
import styled from 'styled-components'
import links from '../data/links'

import {withStyles} from '@material-ui/styles'

import visaImg from '../images/payment_methods/1_visa.jpg'
import masterCardImg from '../images/payment_methods/2_master_card.jpg'
import discoverImg from '../images/payment_methods/3_discover.jpg'
import americanExpressImg from '../images/payment_methods/4_american_express.jpg'
import cashImg from '../images/payment_methods/6_cash.jpg'

const styles = (theme) => ({
    root: {
      backgroundColor: 'rgb(2, 48, 89)',
      color: 'white',
      padding: '20px 40px',
      [theme.breakpoints.up('md')]: {
          display: 'flex',
          padding: '20px 0 20px 40px',
      },
    },
    child: {
      [theme.breakpoints.up('md')]: {
        width: '30%',
      }
    },
    title: {
      marginTop: 20, 
      paddingTop: 40,
      [theme.breakpoints.up('md')]: {
        paddingTop: 20,
        marginTop: 0,
      }
    },
    maps: {
      height: 250,
      border: 'none',
      [theme.breakpoints.up('md')]: {
        height: 400,
      }
    }
})

const PaymentBoxes = styled.section`
    display: flex;
    img {
        padding-right: 5px;
        margin: 10px 0;
    }
`

const QuickLinks = ({classes}) => {
  return (
    <div className={classes.root}>
      <div className={classes.child}>
        <Typography className={classes.title} style={{marginBottom: 10}} variant="h6" component="h6">Quick Links</Typography>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            { links.map(link => <Link href={link.route} style={{color: 'white', fontWeight: 500, height: 35}}>{link.name}</Link>) }
        </div>
      </div>
      <div className={classes.child}>
        <Typography className={classes.title} variant="h6" component="h6">Contact Info</Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>Phone: <strong>(614) 532-3026 | 614-208-0549</strong></Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>Email: <strong>office@mayswilson.com</strong></Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>Address: <strong>743 Columbus St., Etna, OH 43018</strong></Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>Business Hours:</Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>Mon - Fri: 8:00 am - 6:00 pm </Typography>
        <Typography variant="p" component="p" style={{marginTop: 10}}>We are open 24/7 for those in need of emergency repairs services.</Typography>

        <PaymentBoxes>
            <img src={visaImg} alt='Visa' />
            <img src={masterCardImg} alt='Master Card' />
            <img src={discoverImg} alt='Discover' />
            <img src={americanExpressImg} alt='American Express' />
            <img src={cashImg} alt='Cash' />
        </PaymentBoxes>

        <Typography variant="p" component="p" style={{marginTop: 10}}>LICENSE NUMBERS: G05915; HIC02545;</Typography>
        <div style={{backgroundColor: 'white', borderRadius: 10, width: 170, padding: "7px 0 0 7px", marginTop: 10}}>
          <Link
              target="_blank" 
              title="Click for the Business Review of Mays-Wilson Construction Company, a Contractors - General in Etna OH" 
              href="https://www.bbb.org/us/oh/etna/profile/general-contractor/mays-wilson-construction-company-0302-70104605#sealclick">
                  <img 
                      alt="Click for the BBB Business Review of this Contractors - General in Etna OH" 
                      style={{border: 0, filter: 'blur(0px)'}} 
                      src="https://seal-centralohio.bbb.org/seals/blue-seal-153-100-mayswilsonconstructioncompany-70104605.png" 
                      data-src="https://seal-centralohio.bbb.org/seals/blue-seal-153-100-mayswilsonconstructioncompany-70104605.png" 
                      class="lazy" 
                      data-loaded="true" />
          </Link>
        </div>
      </div>
      <div className={classes.child}>
        <Typography className={classes.title} variant="h6" component="h6">Our Location</Typography>
        <iframe 
          className={classes.maps}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6116.542930881939!2d-82.68033823886003!3d39.95768294491781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88386ef703a094ed%3A0x21a508d160bca31e!2s743%20Columbus%20St%2C%20Etna%2C%20OH%2043018!5e0!3m2!1sen!2sus!4v1602710456109!5m2!1sen!2sus" 
          width="100%" 
          frameborder="0" 
          allowfullscreen="" 
          aria-hidden="false" 
          title="Google Maps"></iframe>
      </div>
    </div>
  )
}

export default withStyles(styles)(QuickLinks)
