import React from 'react';
import './App.css';

import axios from 'axios';

export default class App extends React.Component {
  state = {
    words: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/10`)
      .then(res => {
        const words = res.data;
        this.setState({ words });
        console.log(this.state.words)
      })
  }

  render() {
    return (
    <div className="App">

      <ul>
        { this.state.words.map(person => <li>{person}</li>)}
      </ul>
      </div>

    )
  }
}