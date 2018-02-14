
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

import { 
  woxwork,
  arrowButton,
} from '../../constants/index'



class Header extends Component {

  render(){

    const { title, actionBack } = this.props;

    return(
      <View>
        <View style={styles.header}>
          <View style={styles.container}>
            { title ? arrowButton(actionBack) : woxwork }
            <View sytle={styles.button}>
              <Text style={styles.text}> Title </Text>
            </View>
            <View style={styles.button}/>
          </View> 
        </View>
      </View>
    );
  }
}
export default Header;