import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

export default class ItemListDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.actionGoToSelectScreen()}>
          <Text style={styles.txt}> {this.props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ItemListDrawer.propTypes = {
  title: PropTypes.string.isRequired,
  actionGoToSelectScreen: PropTypes.func.isRequired,
};
