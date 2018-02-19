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
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    };
  }

  setDataUser(data, id) {
    switch (id) {
      case 'email':
        this.setState({
          email: data,
        });
        break;

      case 'username':
        this.setState({
          username: data,
        });
        break;

      case 'password':
        this.setState({
          password: data,
        });
        break;

      case 'confirm':
        this.setState({
          password_confirm: data,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <LinearGradient
        colors={color}
        style={styles.container}
      >
        <View style={styles.containerForm}>
          <View style={styles.from}>
            <TextInput
              onChangeText={text => this.setDataUser(text, 'username')}
              placeholder="username"
              style={styles.fieldEmail}
            />
          </View>
          <View style={styles.from}>
            <TextInput
              onChangeText={text => this.setDataUser(text, 'email')}
              placeholder="email"
              style={styles.fieldEmail}
            />
          </View>
          <View style={styles.from}>
            <TextInput
              onChangeText={text => this.setDataUser(text, 'password')}
              placeholder="password"
              style={styles.fieldEmail}
            />
          </View>
          <View style={styles.from}>
            <TextInput
              onChangeText={text => this.setDataUser(text, 'confirm')}
              placeholder="confirm password"
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
