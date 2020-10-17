import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Header from './header'
import SideDrawer from './drawer'
import Actionbar from './actionbar'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Nag from './nag'
import {theme} from './theme';

export default function Layout({ children }) {
  const [drawer_open, toggleDrawer] = useState(false)

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <meta http-equiv="Content-type" content="text/html;charset=utf-8" />
        <meta charset="utf-8" />
        <meta id="view" name="viewport" content=", initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="keywords" content="Mays Construction, MWC company, roof, roof leak, roof insurance, roof insurance job, roof insurance claim, roofer, roofing near me, roof repair, shingles, cedar, commercial roofing, flat roof, designer roof, designer metal roof, composite roofing, storm damage, hail damage, siding installation, gutter installation, insulation, Etna, OH, Central Ohio" />
        <meta name="description" content="Mays-Wilson Construction Company, LLC in Etna, OH, can be reached at 614-532-3026." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Expert Construction - Etna, OH - Mays-Wilson Construction Company, LLC" />
        <meta name="twitter:description" content="Mays-Wilson Construction Company, LLC in Etna, OH, can be reached at 614-532-3026." />
        <meta property="og:description" content="Mays-Wilson Construction Company, LLC in Etna, OH, can be reached at 614-532-3026." />
        <meta property="og:title" content="Expert Construction - Etna, OH - Mays-Wilson Construction Company, LLC" />
        <title>
          Expert Construction - Etna, OH - Mays-Wilson Construction Company, LLC
        </title>
      </Helmet>
      <Header open={() => toggleDrawer(true)} isOpen={drawer_open} />
      <SideDrawer open={drawer_open} toggle={(status) => toggleDrawer(status)} />
      
      <Nag />
      <div style={{marginTop: 99}}>
        {children}
      </div>
      <div style={{marginBottom: 95}}>
        <Actionbar />
      </div>
    </MuiThemeProvider>
  )
}