import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Navbarf from "./Components/UI-C/navbarf"
import useStyles from "./Components/Styles";
import Dashboard from "./Components/Workers/Dashbord";

function App() {
  const classes = useStyles()
  return (
     <div  className={classes.container}>
     <Router>
        <Navbarf/>
     </Router>
     </div>
  );
}

export default App;
