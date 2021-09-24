import React from "react";
import Navbarf from "./Components/UI-C/navbarf";
import useStyles from "./Components/Styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbarf />
    </div>
  );
}

export default App;
