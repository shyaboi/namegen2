import React, { useState } from 'react';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import copy from 'copy-to-clipboard';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';

import 'fontsource-roboto';
let oldArr = []

var val;
function valuetext(value) {
   val = value
    return val
  }
  // let thing = []

  // thing.push('how about now')
  // thing.push('2nd thing')
  // console.log(localStorage.getItem(1))
  // localStorage.setItem(1, thing);



export default class MultiWord extends React.Component {
    constructor() {
        super()
    this.state = {
        topWord: "TopWord",
        words: [],
        numChoice:2,
        oldWords:[]
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
            var amount = parseInt(this.state.numChoice)
          
          axios.get(`https://namegenserver.herokuapp.com/multi/${amount}`).then((res) => {
              let words = res.data;
              this.setState({ words });
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

                copyHyphenState = ()=> {
                  const hyphy = this.state.words.toString().replace(/,/g, '-')
                  copy(hyphy)
                }

                copyUnderState = ()=> {
                  const Under = this.state.words.toString().replace(/,/g, '_')
                  copy(Under)
                }
                

           
        handleChange = (event, value) => {
            this.setState({numChoice:val})
            var chosen = val
            // console.log(chosen)
            axios.get(`https://namegenserver.herokuapp.com/multi/${chosen}`).then((res) => {
              let words = res.data;
              this.setState({ words });
            });
            let words = this.state.words
            oldArr.push(words)
            this.setState({oldWords:oldArr})
  };


  render (){
      const dinus = this.state.words
        var newArr = []
      for(var x = 0; x < dinus.length; x++){
        newArr.push(dinus[x].charAt(0).toUpperCase()+dinus[x].slice(1));
    }
    const toolTipLeaveDelay = 300
    const toolTipEnterDelay = 800
   
    const oldMap = this.state.oldWords
    const listItems = oldMap.map((word) =>
<Tooltip title={JSON.stringify(word)} enterDelay={800} leaveDelay={200} aria-label="PascalCase">
    <Chip label={JSON.stringify(word)}  value={JSON.stringify(word)} />
    </Tooltip>
);
    // console.log(newarray1)
      return (
    <Container>
    <Box p={1} m={1} bgcolor="background.paper">
    <Typography variant="h3" component="h3">Generated Name</Typography>

      <Typography display="flex" flexWrap="wrap" variant="h5" component="h5" gutterBottom key={newArr}>{newArr}</Typography>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
<Tooltip title="This will copy the Generate Name in PascalCase" enterDelay={toolTipEnterDelay} leaveDelay={toolTipLeaveDelay} aria-label="PascalCase">
<Button variant="contained" color="primary" onClick={this.copyCapState} >
 Copy PascalCase
</Button>
</Tooltip>
<Tooltip title="This will copy the Generate Name in camelCase" enterDelay={toolTipEnterDelay} leaveDelay={toolTipLeaveDelay} aria-label="camelCase">

<Button variant="contained" color="primary"  onClick={this.copyCamelState} >
  Copy camelCase
</Button>
</Tooltip>
<Tooltip title="This will copy the Generate Name in flatcase" enterDelay={toolTipEnterDelay} leaveDelay={toolTipLeaveDelay} aria-label="flatcase">

      <Button variant="contained" color="primary" onClick={this.copyLowerState} >
  Copy flatcase
</Button>
</Tooltip>
<Tooltip title="This will copy the Generate Name in kebab-case-lowercase" enterDelay={toolTipEnterDelay} leaveDelay={toolTipLeaveDelay} aria-label="kebab-case-lower">

<Button variant="contained" color="primary" onClick={this.copyHyphenState} >
  Copy kebab-case
</Button>
</Tooltip>
<Tooltip title="This will copy the Generate Name in snake_case_lowercase" enterDelay={toolTipEnterDelay} leaveDelay={toolTipLeaveDelay} aria-label="snake_case_lowercase">

<Button variant="contained" color="primary" onClick={this.copyUnderState} >
  Copy snake_case
</Button>
</Tooltip>
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
   <Box>
    <Typography variant="h3" component="h3">Past Words</Typography>

   <ul>{listItems}</ul>

   </Box>
    </Container>
  );}
}
