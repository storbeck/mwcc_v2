import React from "react"
import { Container, Link } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

// Internal Components
import Layout from "../components/layout"

const styles = theme => ({
  root: {
    marginTop: 170,
    [theme.breakpoints.up("md")]: {
      marginTop: 40,
    },
  },
  section: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%",
    },
  },
  sectionTitle: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
    },
  },
})

const NotFound = ({ classes }) => {

  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <h1>Page not found</h1>
         
          <p>
            <Link to="/">Home</Link>
          </p>
        </Container>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(NotFound)
