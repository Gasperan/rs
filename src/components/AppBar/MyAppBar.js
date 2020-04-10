import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Android from '@material-ui/icons/Android'
import Fingerprint from '@material-ui/icons/Fingerprint'

class MyAppBar extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
    }

    render() {
        const { classes, title } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                        >
                            {title}
                        </Typography>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <Fingerprint />
                        </IconButton>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <Android />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const styles = {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

export default withStyles(styles)(MyAppBar)
