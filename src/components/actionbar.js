import React from 'react';
import { Button, Fab, Container} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import {withStyles} from '@material-ui/styles'

const styles = (theme) => ({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        height: 75,
        background: 'linear-gradient(transparent, rgba(0, 0, 0, .8))',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
})

const Actionbar = ({classes}) => {

    return (
        <div className={classes.root}>
            <Container style={{display: "flex", justifyContent: "space-between"}}>
                <Fab color="primary" aria-label="menu" style={{marginRight: 10}}>
                    <MenuIcon />
                </Fab>
                <Button variant="contained" color="primary" size="large" style={{flexGrow: 1}} aria-label="Contact">Contact</Button>
            </Container>
        </div>
    );
}

export default withStyles(styles)(Actionbar);