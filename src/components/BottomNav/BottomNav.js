import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import * as navigator from '../../navigation/navigator'

const styles = {
  root: {
    width: '100%',
    borderTop: '1px solid #9E9E9E',
  },
};

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  navigateToHome = () => {
    navigator.navigateToHome()
  }

  navigateToReservations = () => {
    navigator.navigateToReservations()
  }

  navigateToProfile = () => {
    navigator.navigateToProfile()
  }


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
        label="Avisos" 
        icon={<RestoreIcon />} 
        onClick={this.navigateToHome}/>
        <BottomNavigationAction 
        label="Reservas" 
        icon={<FavoriteIcon />} 
        onClick={this.navigateToReservations}/>
        <BottomNavigationAction 
        label="Perfil" 
        icon={<LocationOnIcon 
        onClick={this.navigateToProfile}/>}
         />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);