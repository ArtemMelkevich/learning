import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { color } from '../../Constants/index';
import styles from './style';


export default class SignIn extends Component {
  render() {
    return (
      <LinearGradient
        colors={color}
        style={styles.container}
      >
        <View style={styles.containerForm}>
          <View style={styles.from}>
            <TextInput
              placeholder="username"
              style={styles.fieldEmail}
            />
          </View>
          <View style={styles.from}>
            <TextInput
              placeholder="email"
              style={styles.fieldEmail}
            />
          </View>
          <View style={styles.from}>
            <TextInput
              placeholder="password"
              style={styles.fieldEmail}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonNext}
          >
            <Text style={styles.txt}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
