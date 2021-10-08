import React,{ useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Menucss";
import {API_PROXY} from "../Constants"

const Album = () => {
  const classes = useStyles();
  const [cards,setcards] = useState([]);

  const setdata = async () => {
    const responce = await fetch(`${API_PROXY}menue`,{
      method: "GET"
    })
    const data = await responce.json()
      setcards(data);
  }
  useEffect(() => {
    setdata();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={`${classes.heroContent} ${classes.paperContainer}`}>
          <Container maxWidth="md ">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Lake View Hotel Menue
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              We offer high qulity food at the best price ever. We also offer
              free delivery within Maseno
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Book Table
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imgurl}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                     <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.cardContent1}
                  >
                    {card.name}
                  </Typography>
                    <Typography>
                      {card.discription}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button>
                      Ksh {card.price}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}


export default Album