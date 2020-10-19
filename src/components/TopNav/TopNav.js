import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopWord from "../TopWord/TopWord"
import MultiWord from "../MultiWord/MultiWord"
import { MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/TopWord">Top Word</MenuItem>  </Button>
          </Typography>

          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><MenuItem component={Link} to="/MultiWord" >Name Generator</MenuItem></Button>
          </Typography>
          
          
           <Typography variant="h6" className={classes.title}>
          <Button color="inherit">API Documentation</Button>
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
        </Switch>
    </div>






      </Router>
  );
}
