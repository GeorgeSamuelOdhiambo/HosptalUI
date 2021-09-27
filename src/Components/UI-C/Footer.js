import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from '../Workers/Menucss'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear() +''}
      <Link color="inherit" href="#">
         Lake View Hotel
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    {/* <Typography variant="h6" align="center" gutterBottom>
      Odhiambo George
    </Typography> */}
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      georgeodhi98@gmail.com <Copyright />
    </Typography>
    
  </footer>
  );
}

export default StickyFooter