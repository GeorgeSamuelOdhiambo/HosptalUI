import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Button } from "@material-ui/core";
import {API_PROXY} from "../Constants"
// import {MoreVertIcon} from '@material-ui/icons'
import useStyles from "./UIStyles";


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [depatments, setdepatments] = useState([]);
  const setdata = async () => {
    const responce = await fetch(`${API_PROXY}depatments`, {
      method: "GET",
    });
    const data = await responce.json();
    setdepatments(data);
  };

  const depatmentclick = (id) => {
    console.log(id);
  }
  useEffect(() => {
    setdata();
  }, []);

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={3} justifyContent="center">
        {depatments.map((dep) => (
          <Grid item key={dep._id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={classes.root}>
              <CardHeader
                className={classes.head}
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {dep.ava}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon/> */}
                  </IconButton>
                }
                title={dep.title}
              />
              <CardMedia
                className={classes.media}
                image={dep.imgurl}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {dep.sms}
                </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.head}>
                <Button variant="contained" onClick={depatmentclick(dep._id)}>Contained</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
