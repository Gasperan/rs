import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import * as navigator from '../../navigation/navigator'

const navigateToProfessionalsAvailable = (name) => {
    navigator.navigateToProfessionalsAvailable(name)
}

function TitlebarGridList(props) {
    //please remove title from here and put in an own component
    const { classes, data, title } = props

    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList}>
                <GridListTile
                    key="Subheader"
                    cols={2}
                    style={{ height: 'auto' }}
                >
                    <ListSubheader component="div" className={classes.header}>
                        {title}
                    </ListSubheader>
                </GridListTile>
                {data.map((tile) => (
                    <GridListTile key={tile.img}>
                        <div
                            onClick={() =>
                                navigateToProfessionalsAvailable(tile.name)
                            }
                        >
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.author}</span>}
                            />
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    header: {
        fontColor: 'red',
    },
})

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TitlebarGridList)
