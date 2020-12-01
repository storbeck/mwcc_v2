import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem, Menu, IconButton, Button, Typography,Link} from "@material-ui/core"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import DraftsIcon from '@material-ui/icons/Drafts';
import EventIcon from '@material-ui/icons/Event';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/styles'

const styles = (theme) => ({
    root: {
        zIndex: 3,
        [theme.breakpoints.up('md')]: {

        }
    },
    shade: {
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        overflow: 'hidden',
        zIndex: 3,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    popup: {
        position: 'fixed',
        zIndex: 3,
        bottom: -200,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: 'white',
        padding: '30px 20px',
        animation: '$slide 1s forwards',
        [theme.breakpoints.up('md')]: {
            right: 40,
            left: 'auto',
            width: 350,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            boxShadow: '0 0 4px rgba(0, 0, 0, .2)'
        }
    },
    '@keyframes slide': {
        '100%': { bottom: 0 }
    },
    header: {
        marginBottom: 10
    },
    hidden: {
        display: 'none'
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    contactBtn: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            position: 'fixed',
            right: 80,
            bottom: 0,
            padding: '15px 60px',
            boxShadow: '0 -2px 15px rgba(0, 0, 0, .5)',
            zIndex: 3
        }
    }
})

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const Nag = ({classes}) => {
    const [open, toggleNag] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <div className={open ? undefined : classes.hidden}>
                <div className={classes.shade}>&nbsp;</div>
                <div className={classes.popup}>
                    <IconButton className={classes.closeBtn} color="default" onClick={() => toggleNag(false)}><CloseIcon /></IconButton>
                    <div className="container">
                        <Typography className={classes.header} variant="h5" component="h1">Let's Talk!</Typography>
                        <Typography variant="subtitle1" component="p">Thanks for stopping by! We're here to help, please don't hestitate to reach out.</Typography>
                        <div style={{display: "flex", marginTop: 20}}>
                            <Button href="/schedule" variant="contained" color="primary" size="large" style={{flexGrow: 1}}>Schedule Now</Button>
                            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <EventIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link href="/schedule"><ListItemText primary="Schedule Now" /></Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link href="/find-us"><ListItemText primary="Contact Us" /></Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <RoomIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link target="_blank" href="https://www.google.com/maps?ll=39.958144,-82.678278&z=15&t=m&hl=en&gl=US&mapclient=embed&q=743+Columbus+St+Etna,+OH+43018"><ListItemText primary="Get Directions" /></Link>
                                </MenuItem>
                            </StyledMenu>
                            <IconButton color="default" onClick={handleClick}><MenuIcon /></IconButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={open ? classes.hidden : undefined}>
                <Button className={classes.contactBtn} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    onClick={() => toggleNag(true)}>Contact</Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Nag)