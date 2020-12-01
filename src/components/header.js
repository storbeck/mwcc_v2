import React from 'react';
import { AppBar, Grid, Toolbar, IconButton, Button, Typography, Link} from "@material-ui/core"
import links from '../data/links'
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import logo from '../images/appbar.jpg';
import Facebook from "../images/icons/facebook.svg"
import Instagram from "../images/icons/instagram.svg"
import {withStyles} from '@material-ui/styles'

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            position: 'relative'
        },
        position: 'fixed',
        padding: '15px 0',
        backgroundColor: 'rgb(1, 35, 64)',
        minHeight: 119,
    },
    mobileOnly: {
        marginTop: 10,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    desktopOnly : {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    headerCallBtn: {
        width: 300,
        height: 75,
        fontSize: '1.8em',
    },
    icon_btn: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    toolbar: {
        margin: '10px',
        paddingLeft: '16px',
        right: 0,
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column'
    },
    socialIcons: {
        width: 32,
        borderRadius: '50%',
        marginRight: 10,
        cursor: 'pointer'
    }

})



const Header = ({classes, open}) => {

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Grid justify='space-between' container >
                    <IconButton className={classes.icon_btn} edge="start" color="inherit" aria-label="menu" onClick={() => open()}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.desktopOnly}>
                        <div>
                            <a href="https://www.facebook.com/MaysWilsonC/" target="_blank" rel="noreferrer">
                                <img src={Facebook } alt="Facebook" className={classes.socialIcons} width={32} />
                            </a>
                            <a href="https://www.instagram.com/roofthirty/" target="_blank" rel="noreferrer">
                                <img src={Instagram} alt="Instagram" className={classes.socialIcons} width={32} />
                            </a>
                        </div>

                        <Typography variant="subtitle2" component="p" style={{color: "white"}}>Locally Owned & Operated</Typography>
                        <Typography variant="subtitle2" component="p" style={{color: "white"}}>Serving Columbus Ohio & the Surrounding Area</Typography>
                    </div>
                    <img src={logo} alt="Mays-Wilson Construction Company" style={{width: 110, height: 69, borderRadius: 10}}/>
                    <div className={classes.mobileOnly}>
                        <Button color="inherit">
                            <a href="tel:614-532-3026" style={{color: "white", marginTop: 5}}>
                                <PhoneIcon color="inherit" />
                            </a>
                        </Button>
                    </div>
                    <div className={classes.desktopOnly}>
                        <Button className={classes.headerCallBtn} variant="contained" color="primary" size="large" onClick={() => window.location='tel:614-532-3026'}>
                            <PhoneIcon color="inherit" style={{marginRight: 10}}/> (614) 532-3026
                        </Button>
                    </div>
                </Grid>
                <div className={classes.desktopOnly} style={{width: '100%'}}>
                    <div style={{position: 'absolute', left: -10, right: 0, height: 1, backgroundColor: 'rgb(2, 48, 89)', marginTop: 20}}>&nbsp;</div>
                    <div style={{marginTop: 40, display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        { links.map((link, idx) => <Link key={idx} href={link.route} style={{color: 'white', fontWeight: 500}}>{link.name}</Link>) }
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}



export default withStyles(styles)(Header)