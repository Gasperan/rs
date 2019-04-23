import React, { Component } from 'react';
import BottomNav from './components/BottomNav/BottomNav'
import './App.css';
import GridList from './components/GridList/GridList'

export default class App extends Component {
  render() {
    return <div style={styles.bla}>
      <div style={styles.text}>
        fdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfd
        fdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfd
        fdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfd
        fdsfdfdsfdfdsfdfdsfdfdsfdfdsfdfdsfd
        fdsfdfdsfdfdsfdfdsfdfdsfdfdsfd
      </div>
      <GridList style={styles.text2} />
      <BottomNav style={styles.bottom} />
    </div>
  }
}

const styles = {
  bla: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100vh'
  },
  text: {
    display: 'flex',
    backgroundColor: 'green'
  },
  text2: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'red',
    overflowX: 'scroll'
  },
  bottom: {
    display: 'flex',
    height: 100,

  }
}
