import React from "react";
import "./App.css";
import TopNav from "./components/TopNav/TopNav"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import TopWord from "./components/TopWord/TopWord"
import MultiWord from "./components/MultiWord/MultiWord"

export default class App extends React.Component {


  

  render() {
    return (
    <Container >
      <TopNav />
      
    </Container>
     
    );
  }
}
