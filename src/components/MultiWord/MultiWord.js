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
import Slider from '@material-ui/core/Slider';

import 'fontsource-roboto';

var val;
function valuetext(value) {
   val = value
    return val
  }


export default class MultiWord extends React.Component {
    constructor() {
        super()
    this.state = {
        topWord: "TopWord",
        nextWord:"",
        words: [],
        numChoice:2
    };
    // this.valueSlider = this.valuetext.bind(this)
}
  useStyles = makeStyles({
        root: {
          width: 500,
        },
      });

      
      
      componentDidMount() {
          
          axios.get(`http://localhost:5000/${this.state.numChoice}`).then((res) => {
              let [...words] = res.data;
              // console.log(terpWord);
              // const words = res.data;
              this.setState({ words });
              // console.log(this.state.words);
            });
        }

   
                grabMor(){
                   
                    // return
                } 
                onChange =()=> {

                } 
           
        handleChange = (event, value) => {
            console.log(val)

            this.setState({numChoice:val})
  };


  render (){

  return (
    <Container>
    <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
      <Typography variant="h2" component="h2" gutterBottom key={this.state.words}>{this.state.words}</Typography>
</Box>
<div className={this.useStyles.root}>
      <Typography id="discrete-slider" gutterBottom>
       How Many Words
      </Typography>
      <Slider
        defaultValue={2}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        onMouseUp={this.handleChange}
      />
   
    </div>
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
      <BottomNavigationAction label="Next" value="next" icon={<ArrowForwardIosIcon />} />
    </BottomNavigation>
    </Container>
  );}
}
