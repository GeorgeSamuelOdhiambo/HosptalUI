import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@material-ui/core";
import useStyles from "../UI-C/UIStyles";
import Modal from '@mui/material/Modal';
import { Link } from "@mui/material";
// import Inputfield from "./Inputfield";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

const cards = [1, 2, 3, 4, 5, 6];

export default function BasicCard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
              <CardContent>
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
                <Button size="small" onClick={handleOpen}>LERN MORE</Button>
              </CardActions></Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </Container>
  );
}
