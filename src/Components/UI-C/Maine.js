
import React from 'react';
import { Link } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import useStyles from './UIStyles'
import { Grid } from '@material-ui/core';

const Hero = (props) => {
  const classes = useStyles();
props.settrue()
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
      <section className={classes.roothero}>
      <ReactPlayer
        url=""
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box className={classes. boxcontent}>
          <Typography  variant="h3" component="h1" className={classes.title}>
            Welcome To Lake View Hotel
          </Typography>
          <Link to="/login">
          <Button color="primary" variant="contained">
            Click Me
          </Button>
          </Link>
        </Box>
      </div>
    </section>
  
      </Grid>
    </Grid>
    );
};

export default Hero;