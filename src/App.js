import React, { Component } from 'react';
import BottomNav from './components/BottomNav/BottomNav'
import './App.css';
import GridList from './components/GridList/GridList'
import MyAppBar from './components/AppBar/MyAppBar'
import { Router } from "react-router"
import { Route } from 'react-router-dom'
import { NotReadyYet } from './components/NotReadyYet/NotReadyYet'
import history from './navigation/routes'


export default class App extends Component {
  render() {
    return <Router history={history}>
      <div style={styles.bla}>
        <MyAppBar title='Recetando Sonrisas' style={styles.text} />
        <div style={styles.text2}>
          <Route path="/reservations" component={GridList}/>
          <Route exact path="/" component={NotReadyYet}/>
          <Route path="/profile" component={NotReadyYet}/>
        </div>
        <BottomNav style={styles.bottom}/>
      </div>
    </Router>
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
  },
  text2: {
    display: 'flex',
    flexGrow: 1,
    overflowX: 'scroll'
  },
  bottom: {
    display: 'flex',
    height: 100,
  }
}
