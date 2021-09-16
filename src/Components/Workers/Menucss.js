import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardAction:{
      textAlign: 'center',
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
      textAlign: 'center',
    },
    cardContent1: {
      textAlign: 'center',
      paddingTop: theme.spacing(2),
    },
    footer: {
      backgroundColor: "#ffebee",
      padding: theme.spacing(6),
    },
    paperContainer: {
      backgroundSize: "cover",
      backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodnetwork.com%2Frestaurants%2Fphotos%2Fhealthy-restaurant-menus&psig=AOvVaw2Qbbdix_7rqzIqThRTj6TM&ust=1630666487568000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjD-N2Q4PICFQAAAAAdAAAAABAK)`,
    },
  }));

  export default useStyles