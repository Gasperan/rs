import React, { Component } from 'react'
import BottomNav from './components/BottomNav/BottomNav'
import './App.css'
import GridList from './components/GridList/GridList'
import { AvailableServices } from './pages/AvailableServices/AvailableServices'
import { ProfessionalsAvailable } from './pages/ProfessionalsAvailable/ProfessionalsAvailable'
import { ProfesionalReservationList } from './pages/ProfessionalReservationList/ProfessionalReservationList'
import { NotFound } from './pages/NotFound/NotFound'
import MyAppBar from './components/AppBar/MyAppBar'
import { Router, Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { NotReadyYet } from './components/NotReadyYet/NotReadyYet'
import history from './navigation/routes'

export default class App extends Component {
    render() {
        return (
            <div style={styles.bla}>
                <Router history={history}>
                    <MyAppBar
                        title="Sistema de reservas - Recetando Sonrisas"
                        style={styles.text}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/reservations"
                            strict
                            component={AvailableServices}
                        />
                        <Route exact path="/" component={NotReadyYet} />
                        <Route path="/profile" component={NotReadyYet} />
                        <Route
                            exact
                            path="/medicine"
                            strict
                            component={ProfessionalsAvailable}
                        />

                        <Route
                            exact
                            path="/nursing"
                            strict
                            component={ProfessionalsAvailable}
                        />
                        <Route
                            exact
                            path="/odontology"
                            strict
                            component={ProfessionalsAvailable}
                        />
                        <Route
                            exact
                            path="/medicine/carlos-albornoz"
                            strict
                            component={ProfesionalReservationList}
                        />

                        <Route
                            path="*"
                            strict
                            exact={true}
                            component={NotFound}
                        />
                    </Switch>
                    <BottomNav style={styles.bottom} />
                </Router>
            </div>
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
