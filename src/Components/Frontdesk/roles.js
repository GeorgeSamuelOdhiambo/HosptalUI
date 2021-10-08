import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@material-ui/core";
import useStyles from "../UI-C/UIStyles";
import { Link } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Makeres from "../Frontdesk/Makeres"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cards = [1, 2, 3, 4, 5, 6];

export default function BasicCard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // const finduser = async () => {
      
    //   const responce = await fetch(`${API_PROXY}depatments`,{
    //     method: "GET"
    //   })
    //   const data = await responce.json()
    // }

    // React.useEffect(() => {
    //   setdata()
    // }, [])

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((dep) => (
          <Grid item key={dep._id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card  className={classes.center}>
              <CardContent className={classes.text}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Reservation
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent><Link  underline="none" to="">
              <CardActions >
                <Button size="small" onClick={handleClickOpen}>Make Resavation</Button>
              </CardActions></Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Make Resavation"}
        </DialogTitle>
        <DialogContent>
          <Makeres/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Dismiss</Button>
          <Button onClick={handleClose} autoFocus>
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
