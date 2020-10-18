import React from "react";
import axios from "axios"
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import BottomNav from "./components/BottomNav/BottomNav"
import TopNav from "./components/TopNav/TopNav"

export default class App extends React.Component {
  state = {
    topWord: "TopWord",
    words: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/10`).then((res) => {
      let [terpWord, ...words] = res.data;
      console.log(terpWord);
      // const words = res.data;
      this.setState({ words });
      console.log(this.state.words);
      this.setState({ topWord:terpWord });
    });
  }

  render() {
    return (
    <Container >
      <TopNav />
      <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
      <Typography variant="h1" component="h2" gutterBottom key={this.state.topWord}>{this.state.topWord}</Typography>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
      <Button variant="contained" color="primary">
  Primary
</Button>
</Box>
<Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
    <BottomNav />
    </Box>
    </Container>
     
    );
  }
}
