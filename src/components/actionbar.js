import React from 'react';
import { Button, Fab, Container} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: linear-gradient(transparent, rgba(0, 0, 0, .8))
`

const Actionbar = props => {
    console.log(props)

    return (
        <Wrapper>
            <Container style={{display: "flex", justifyContent: "space-between"}}>
                <Fab color="primary" aria-label="menu" style={{marginRight: 10}}>
                    <MenuIcon />
                </Fab>
                <Button variant="contained" color="primary" size="large" style={{flexGrow: 1}} aria-label="Contact">Contact</Button>
            </Container>
        </Wrapper>
    );
}

export default Actionbar;