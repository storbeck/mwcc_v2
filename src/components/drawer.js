import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {Link} from "gatsby"
import styled from "styled-components";
import Facebook from "../images/icons/facebook.svg"
import Instagram from "../images/icons/instagram.svg"

const StyledPaper = styled.div`
background-attachment: scroll;
background-color: rgb(1, 35, 64);
width: 310.5px;
a {

    }

    div > span {
        font-weight: 700;
        color: rgb(255, 255, 255);
        cursor: pointer;
        display: flex;
        flex-direction: row;
        font-family: Roboto;
        font-size: 16px;
        justify-content: flex-start;
        letter-spacing: 0.48px;
        line-height: 24px;
        overflow-wrap: break-word;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 12px;
        position: relative;
        text-align: left;
        text-transform: uppercase;
        vertical-align: top;
        visibility: visible;
    }
}
`

const SocialIcons = styled.div`
    img { 
        width: 32px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
    }
`

const SideDrawer = props => {
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    props.toggle(open)
  }

  const links = [
    { name: 'Home', route: '/' },
    { name: 'Our Process', route: '/general-contractor' },
    { name: 'Residential Roofing', route: '/roofing-installation' },
    { name: 'Commercial Roof Repairs', route: '/roofing-repair' },
    { name: 'Gutters', route: '/gutter-installation' },
    { name: 'Siding', route: '/siding-installation' },
    { name: 'Products', route: '/our-brands' },
    { name: 'Project Gallery', route: '/photo-gallery' },
    { name: 'Contact Us Today!', route: '/find-us' },
  ]
  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem>
            <SocialIcons>
                <a href="https://www.facebook.com/MaysWilsonC/" target="_blank"><img src={Facebook }alt="Facebook" /></a>
                <a href="https://www.instagram.com/roofthirty/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            </SocialIcons>
        </ListItem>
        {links.map(
          (obj, index) => (
            <ListItem key={index} component={Link} button to={obj.route}>
              <ListItemText primary={obj.name} />
            </ListItem>
          )
        )}
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={props.open}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        PaperProps={{component: StyledPaper}}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  )
}

export default SideDrawer
