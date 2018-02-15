
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';


import {
  woxwork,
  arrowButton,
  menuButton,
} from '../../Constants/index';


export default class Header extends Component {
  showElementHeader(title, actionBack, actionOpenDrawer) {
    switch (title) {
      case 'back':
        return arrowButton(actionBack);

      case 'menu':
        return menuButton(actionOpenDrawer);

      default:
        return woxwork;
    }
  }

  render() {
    const {
      title,
      actionBack,
      actionOpenDrawer,
    } = this.props;
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.container}>
            {
              this.showElementHeader(title, actionBack, actionOpenDrawer)
            }
            <View sytle={styles.button}>
              <Text style={styles.text}> Title </Text>
            </View>
            <View style={styles.button} />
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  navigate: PropTypes.object,
};

Header.default = {
  navigate: PropTypes.object,
};
