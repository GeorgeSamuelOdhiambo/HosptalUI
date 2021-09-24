import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    rootnav: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      head:{
        backgroundColor: "green",
        alignSelf: "center"
      },
      center:{
        alignItems: "center"
      },

      //Hero css
      roothero: {
        backgroundColor: "green",
        width: '100%',
        height: '80vh',
        position: 'relative',
        '& video': {
          objectFit: 'cover',
        },
       
      }, 
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      title: {
        paddingBottom: theme.spacing(4),
        textAlign: "center"
      },
      boxcontent:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
      }
  }));
  

  export default useStyles