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
import copy from 'copy-to-clipboard';

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
            this.setState({numChoice:val})
            var amount = parseInt(this.state.numChoice) - 1
          
          axios.get(`https://namegenserver.herokuapp.com/multi/${amount}`).then((res) => {
              let words = res.data;
            //   console.log(words);
              // const words = res.data;
              this.setState({ words });

              // console.log(this.state.words);
            });
        }
                onChange =()=> {

                } 

                copyLowerState = ()=> {
                  const toLower = this.state.words.toString().replace(/,/g, '')
                  copy(toLower)
                }
                copyCapState = ()=> {
                  const dinus = this.state.words
                  var newArr = []
                  for(var x = 0; x < dinus.length; x++){
                  newArr.push(dinus[x].charAt(0).toUpperCase()+dinus[x].slice(1));
                  const toCaps = newArr.toString().replace(/,/g, '')
                  copy(toCaps);
                  }
                }
                copyCamelState = ()=> {
                  let [cam, ...dinus] = this.state.words
                  let newArr = []
                  for(var x = 0; x < dinus.length; x++){
                  newArr.push(dinus[x].charAt(0).toUpperCase()+dinus[x].slice(1));
                  // console.log('cam: '+ cam, newArr)
                }
                const toCaps = newArr.toString().replace(/,/g, '')
                copy(cam+toCaps);
                }

           
        handleChange = (event, value) => {
            // console.log(val)
            this.setState({numChoice:val})
            var chosen = val
            console.log(chosen)
            axios.get(`https://namegenserver.herokuapp.com/multi/${chosen}`).then((res) => {
              let words = res.data;
            //   console.log(words);
              // const words = res.data;
              this.setState({ words });

              // console.log(this.state.words);
            });
  };


  render (){
      const dinus = this.state.words
        var newarray1 = []
      for(var x = 0; x < dinus.length; x++){
        newarray1.push(dinus[x].charAt(0).toUpperCase()+dinus[x].slice(1));
    }
    console.log(newarray1)
      return (
    <Container>
    <Box p={1} m={1} bgcolor="background.paper">
      <Typography display="flex" flexWrap="wrap" variant="h5" component="h5" gutterBottom key={newarray1}>{newarray1}</Typography>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
<Button variant="contained" color="primary" onClick={this.copyCapState} >
  Copy 1st Letter Capitalilized
</Button>
      <Button variant="contained" color="primary" onClick={this.copyLowerState} >
  Copy All Lowercase
</Button>
<Button variant="contained" color="primary" onClick={this.copyCamelState} >
  Copy camelCase
</Button>
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

<Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
    </Box>
   
    </Container>
  );}
}
