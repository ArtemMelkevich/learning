
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import styles from './style';

import Icon from 'react-native-vector-icons/Ionicons';


export default class SignIn extends Component {
  render() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
            </View>
        </View>
    );
  }
}