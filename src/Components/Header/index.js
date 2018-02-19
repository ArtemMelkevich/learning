
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
} from '../../Constants';


export default class Header extends Component {
  showHeader(title, actionBack, actionOpenDrawer) {
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
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          {
            this.showHeader(this.props.title, this.props.actionBack, this.props.actionOpenDrawer)
          }
          <View sytle={styles.button}>
            <Text style={styles.text}> Title </Text>
          </View>
          <View style={styles.button} />
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actionBack: PropTypes.func.isRequired,
  actionOpenDrawer: PropTypes.func.isRequired,
};
