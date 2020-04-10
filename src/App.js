import React, { Component } from 'react'
import BottomNav from './components/BottomNav/BottomNav'
import './App.css'
import GridList from './components/GridList/GridList'
import { AvailableServices } from './pages/AvailableServices/AvailableServices'
import { ProfessionalsAvailable } from './pages/ProfessionalsAvailable/ProfessionalsAvailable'
import MyAppBar from './components/AppBar/MyAppBar'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import { NotReadyYet } from './components/NotReadyYet/NotReadyYet'
import history from './navigation/routes'

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div style={styles.bla}>
                    <MyAppBar
                        title="Sistema de reservas - Recetando Sonrisas"
                        style={styles.text}
                    />
                    <div style={styles.main}>
                        <Route
                            path="/reservations"
                            component={AvailableServices}
                        />
                        <Route exact path="/" component={NotReadyYet} />
                        <Route path="/profile" component={NotReadyYet} />
                        <Route
                            path="/medicine"
                            component={ProfessionalsAvailable}
                        />
                        <Route
                            path="/nursing"
                            component={ProfessionalsAvailable}
                        />
                        <Route
                            path="/odontology"
                            component={ProfessionalsAvailable}
                        />
                    </div>
                    <BottomNav style={styles.bottom} />
                </div>
            </Router>
        )
    }
}

const styles = {
    bla: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100vh',
    },
    text: {
        display: 'flex',
    },
    main: {
        display: 'flex',
        flexGrow: 1,
        overflowX: 'scroll',
    },
    bottom: {
        display: 'flex',
        height: 100,
    },
}
