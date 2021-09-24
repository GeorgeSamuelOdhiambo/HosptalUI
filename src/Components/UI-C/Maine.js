
import React from 'react';
import { useHistory } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import useStyles from './UIStyles'
import { Container, Grid } from '@material-ui/core';

const Hero = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const tofung = () => {
    history.push("/login")
  }
  props.settrue()
  
  return (
    <Container className={classes.cardGrid} >
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
          
          <Button color="primary" variant="contained" onClick={tofung}>
            Click Me
          </Button>
        </Box>
      </div>
    </section>
  
      </Grid>
    </Grid>
    </Container>
    );
};

export default Hero;