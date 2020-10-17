import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem, Menu, IconButton, Button, Typography,} from "@material-ui/core"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import DraftsIcon from '@material-ui/icons/Drafts';
import EventIcon from '@material-ui/icons/Event';
import CloseIcon from '@material-ui/icons/Close';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    overflow: hidden;
    z-index: 2;
`

const Popup = styled.div`
    position: absolute;
    bottom: -200px;
    left: 0;
    right: 0;
    height: 200px;
    background-color: white;
    padding: 30px 20px;
    animation: slide 1s forwards;

    @keyframes slide {
        100% { bottom: 0 }
    }

    h1 {
        margin-bottom: 10px;
    }

    button:nth-child(2) {
        border-radius: 50%;
        padding: 0;
        width: 50px !important;
    }

    #closeBtn {
        position: absolute;
        top: 0;
        right: 0;
    }
`

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

const Nag = props => {
    const [open, toggleNag] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Open after set amount of time
    // setTimeout(() => toggleNag(true), 2000)

    if (open) {
        return (
            <Wrapper>
                <Popup>
                    <IconButton id="closeBtn" color="default" onClick={() => toggleNag(false)}><CloseIcon /></IconButton>
                    <div className="container">
                        <Typography variant="h5" component="h1">Let's Talk!</Typography>
                        <Typography variant="subtitle" component="p">Thanks for stopping by! We're here to help, please don't hestitate to reach out.</Typography>
                        <div style={{display: "flex", marginTop: 20}}>
                            <Button variant="contained" color="primary" size="large" style={{flexGrow: 1}}>Schedule Now</Button>
                            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <EventIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Schedule Now" />
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact Us" />
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <RoomIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Get Directions" />
                                </MenuItem>
                            </StyledMenu>
                            <IconButton variant="outlined" color="default" onClick={handleClick}><MenuIcon /></IconButton>
                        </div>
                    </div>
                </Popup>
            </Wrapper>
        )
    } else {
        return <div></div>
    }
}

export default Nag