import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

class ItemListDrawer extends Component {
  render() {
    const {
      title,
      actionGoToSelectScreen,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => actionGoToSelectScreen()}>
          <Text style={styles.txt}> {title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemListDrawer;
