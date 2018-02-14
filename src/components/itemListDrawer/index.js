import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './style';

class ItemListDrawer extends Component {
  render(){
    const { 
      title,
      actionGoToSelectScreen
    } = this.props;
    console.warn(actionGoToSelectScreen);
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => actionGoToSelectScreen()}>
          <Text style={{ textAlign: 'center'}}> {title} </Text>
        </TouchableOpacity>
      </View>           
    );
  }
}

export default ItemListDrawer;