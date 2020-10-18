import React from 'react';
import {withStyles} from '@material-ui/styles'

const styles = (theme) => ({
    root: {
        width: '95%',
        position: 'relative',
        zIndex: -1,
        marginTop: 10,
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.up('md')]: {
            // display: 'none'
        }
    },
    normal: {
      '&:before': {
        transform: 'translate3d(10px, 10px, 0)'
      },
    },
    flipped: {
      '&:before': {
        transform: 'translate3d(-20px, 20px, 0)'
      },
    },
    img: {
      width: '97%',
      position: 'relative',
      zIndex: 0,
      border: '1px solid white'
    }
})

const ImageContainer = ({classes, image, alt, flipped = false}) => (
    <div className={flipped
        ? `${classes.root} ${classes.flipped}` 
        : `${classes.root} ${classes.normal}`}>
        <img className={classes.img} src={image} alt={alt} />
      </div>
)

export default withStyles(styles)(ImageContainer);