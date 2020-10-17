import React from 'react';
import { AppBar, Grid, Toolbar, IconButton, Button,} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import logo from '../images/appbar.jpg';
import styled from 'styled-components'

const Wrapper = styled.div`
    header {
        background-color: rgb(1, 35, 64);
    }
`

const Header = props => {
    console.log(props)

    return (
        <Wrapper>
            <AppBar position="fixed" style={{padding: "15px 0"}}>
                <Toolbar>
                    <Grid justify='space-between' container >
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => props.open()}>
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} style={{width: 110, height: 69, borderRadius: 10}}/>
                        <Button color="inherit">
                            <a href="tel:614-532-3026" style={{color: "white", marginTop: 5}}>
                                <PhoneIcon color="inherit" />
                            </a>
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Wrapper>
    );
}

export default Header;