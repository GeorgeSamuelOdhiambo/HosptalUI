import React,{ useState } from 'react';
import {Switch,Route} from "react-router-dom"
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Navbar from '../UI-C/Navbar'
import Maine from "../UI-C/Maine"
import Cards from "../UI-C/cards"
import useStyles from "./UIStyles"
import Logmein from "../UI-C/Logmein"
import Footer from "../UI-C/Footer"

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.rootnav}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const BackToTop = (props) => {
  const [header,setheader] = useState(true)
  const tofals = () => {
    setheader(false);
  }
  const settrue = () => {
    setheader(true)
  }
  return (
    <React.Fragment>
      <CssBaseline />
        { header && <Navbar/>}
      { header && <Toolbar id="back-to-top-anchor" />}
      <Container>
      <Switch>
          <Route path="/" exact>
            <Maine settrue={settrue}/>
            <Cards/>
          </Route>
          <Route path="/topics">
            <Cards />
          </Route>
          <Route path="/login">
           <Logmein setfalls={tofals}/>
          </Route>
        </Switch>
      </Container>
      {header &&  <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
   }
     { header && <Footer/>}
    </React.Fragment>
  );
}

export default BackToTop