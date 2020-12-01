import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme()

theme.palette.primary = {
  main: 'rgb(4, 76, 146)',
  contrastText: '#fff',
}

theme.typography.h5 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
    fontWeight: 400
  },
}
theme.typography.h3 = {
  fontSize: '1.4rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    fontWeight: 400
  },
}

export default theme;