import React from 'react'
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

import {
    ListItemAvatar,
    Avatar,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core'

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
}))

export default function NestedList() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const [secondary, setSecondary] = React.useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
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
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.lightGreen}>
                        <EventAvailableIcon style={{ color: 'white' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="delete">
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
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}
