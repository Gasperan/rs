import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import InfoIcon from '@material-ui/icons/Info'
import EditIcon from '@material-ui/icons/Edit'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import EventBusyIcon from '@material-ui/icons/EventBusy'
import { deepOrange, deepPurple, lightGreen } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

import {
    ListItemAvatar,
    Avatar,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    lightGreen: {
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[500],
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}))

/**
 * 
 * {
        startTime: '11:00',
        finishTime: '11:20',
        patient: {
            name: 'Juan Perez',
            rut: '11.456.098-k',
        },
    },
 * 
 */

/**
 * mover esta logica a otro lugar
 */
const defineContentInItem = (item) => {
    let primaryText
    const secondaryText = `${item.startTime} - ${item.finishTime}`
    if (item.status == 'SCHEDULED') {
        primaryText = item.patient.name
    } else if (item.status == 'FREE') {
        primaryText = 'Hora disponible'
    }

    return <ListItemText primary={primaryText} secondary={secondaryText} />
}

export default function NestedList(props) {
    const { items } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="Phone ringtone"
                            secondary="Titania"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List>
            </Dialog>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Horas
                    </ListSubheader>
                }
                className={classes.root}
            >
                {items.map((item) => {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.lightGreen}>
                                    <EventAvailableIcon
                                        style={{ color: 'white' }}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            {defineContentInItem(item)}
                            <ListItemSecondaryAction>
                                <IconButton
                                    aria-label="delete"
                                    onClick={handleClickOpen}
                                >
                                    <AddCircleIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <InfoIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>
        </Fragment>
    )
}
