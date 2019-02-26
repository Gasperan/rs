import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MyAppBar from './components/AppBar/MyAppBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <MyAppBar/>
      </div>
    );
  }
}

export default App;
