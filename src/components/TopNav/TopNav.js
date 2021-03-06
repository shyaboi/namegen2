import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import TopWord from "../TopWord/TopWord"
import MultiWord from "../MultiWord/MultiWord"
import Docs from "../Docs/Docs"
import Home from "../Home/Home"
import AllTheWords from "../AllTheWords/AllTheWords"




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TopNav() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar aria-controls="simple-menu" aria-haspopup="true">
  
          <ClickAwayListener >
          <div>
      <Button onClick={handleClick}>
      <MenuIcon />

      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/Home">Home</MenuItem>
        <MenuItem onClick={handleClose}>FutureThings</MenuItem>
        <MenuItem onClick={handleClose}>FutureThings</MenuItem>
      </Menu>
    </div>

    </ClickAwayListener>

            <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/TopWord">Top Word</MenuItem>  </Button>
          </Typography>

          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/MultiWord" >Name Generator</MenuItem></Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"> <MenuItem component={Link} to="/AllTheWords" >All The Words</MenuItem></Button>
          </Typography>
          
           <Typography variant="h6" className={classes.title}>
          <Button color="inherit"> <MenuItem component={Link} to="/Docs" >API Documentation</MenuItem></Button>
          </Typography>
          {/* <Button color="inherit">Anoter Thing</Button> */}
</Toolbar>
      </AppBar>





      <Switch>
      <Route exact path="/">
     <Redirect to="/Docs" />
 </Route>
 <Route exact path="/namegen2">
     <Redirect to="/Docs" />
 </Route>
 
      <Route path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/TopWord" component={TopWord}>
            <TopWord />
          </Route>
          <Route exact path="/MultiWord" component={MultiWord}>
            <MultiWord />
          </Route>
          <Route exact path="/AllTheWords" component={AllTheWords}>
            <AllTheWords />
          </Route>
          <Route exact path="/Docs" component={Docs}>
            <Docs />
          </Route>
        </Switch>
    </div>






      </Router>
  );
}
