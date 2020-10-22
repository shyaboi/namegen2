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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopWord from "../TopWord/TopWord"
import MultiWord from "../MultiWord/MultiWord"
import Docs from "../Docs/Docs"




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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar aria-controls="simple-menu" aria-haspopup="true">
  
          <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.root}>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        {open ? (
          <div className={classes.dropdown}>
            Click me, I will stay visible until you click outside.
          </div>
        ) : null}
              </div>

    </ClickAwayListener>

            <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/TopWord">Top Word</MenuItem>  </Button>
          </Typography>

          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/MultiWord" >Repo Name Generator</MenuItem></Button>
          </Typography>
          
          
           <Typography variant="h6" className={classes.title}>
          <Button color="inherit"> <MenuItem component={Link} to="/Docs" >API Documentation</MenuItem></Button>
          </Typography>
          <Button color="inherit">Anoter Thing</Button>
</Toolbar>
      </AppBar>





      <Switch>
        
          <Route path="/TopWord" component={TopWord}>
            <TopWord />
          </Route>
          <Route exact path="/MultiWord" component={MultiWord}>
            <MultiWord />
          </Route>
          <Route exact path="/Docs" component={Docs}>
            <Docs />
          </Route>
        </Switch>
    </div>






      </Router>
  );
}
