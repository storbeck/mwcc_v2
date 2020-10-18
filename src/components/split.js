import React from 'react';
import {withStyles} from '@material-ui/styles'

const styles = (theme) => ({
    root: {
      display: 'inline-block',
      height: 5,
      width: 60,
      marginTop: 20,
      marginBottom: 20,
    },
    light: {
      backgroundColor: 'white'
    },
    dark: {
      backgroundColor: 'rgb(4, 76, 146)'
    }
})

const Split = ({classes, dark = false}) => (
  <div className={dark 
    ? `${classes.root} ${classes.dark}` 
    : `${classes.root}  ${classes.light}`} />
)

export default withStyles(styles)(Split);