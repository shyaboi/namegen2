import React, { useState } from 'react';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';

export default class TopWord extends React.Component {
  state = {
    topWord: "TopWord",
    nextWord:"",
    words: [],    
  };
  useStyles = makeStyles({
        root: {
          width: 500,
        },
      });



  componentDidMount() {
    axios.get(`http://localhost:5000/10`).then((res) => {
      let [terpWord, ...words] = res.data;
      // console.log(terpWord);
      // const words = res.data;
      this.setState({ words });
      // console.log(this.state.words);
      this.setState({ topWord:terpWord });
    });
  }
  handleChange = (event, newValue) => {
    let nextWord = this.state.words.pop()
    console.log(nextWord)
    this.setState({nextWord:nextWord})
    this.setState({topWord:nextWord})
    if (this.state.words.length < 4) {
      axios.get(`http://localhost:5000/10`).then((res) => {
      let cacheGrab = res.data;
      console.log(cacheGrab)
      this.state.words.unshift(...cacheGrab)
    })
      
    }
        console.log(this.state.topWord)
  };
  
  copyCodeToClipboard = () => {
    // const el = this.state.topWord
    this.state.topWord.select()
    document.execCommand("copy")
  }


  render (){
  return (
    <Container>
    <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
      <Typography variant="h1" component="h2" gutterBottom key={this.state.topWord}>{this.state.topWord}</Typography>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
      <Button variant="contained" color="primary" onClick={this.copyCodeToClipboard}>
  Copy
</Button>
</Box>
<Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
    </Box>
    <BottomNavigation   className={this.useStyles.root}>
      {/* <BottomNavigationAction label="Previous" value="previous"  icon={<ArrowBackIosIcon />} /> */}
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Refresh" value="refresh" icon={<LoopRoundedIcon />} />
      <BottomNavigationAction label="Next" value="next" onClick={this.handleChange} icon={<ArrowForwardIosIcon />} />
    </BottomNavigation>
    </Container>
  );}
}
