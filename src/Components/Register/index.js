import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { color } from '../../Constants/index';
import styles from './style';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      err: '',
    };
  }

  setDataUser(data, id) {
    switch (id) {
      case 'email':
        this.setState({
          email: `${data}`,
        });
        break;

      case 'username':
        this.setState({
          username: `${data}`,
        });
        break;

      case 'password':
        this.setState({
          password: `${data}`,
        });
        break;

      case 'confirm':
        this.setState({
          passwordConfirm: `${data}`,
        });
        break;
      default:
        break;
    }
  }

  showError(text) {
    this.setState({
      err: `${text}`,
    });
  }

  sendQueryRegistration() {
    this.props.actionRegistration(
      this.state.email,
      this.state.username,
      this.state.password,
      this.state.passwordConfirm,
    );
  }

  clickSignIn() {
    if (
      this.state.email === '' ||
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.passwordConfirm === ''
    ) {
      this.showError('Please, filling all fields');
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.showError('Password don\'t match');
    } else {
      this.sendQueryRegistration();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.keyAvoid}
        behavior="padding"
      >
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
                keyboardType="email-address"
                style={styles.fieldEmail}
              />
            </View>
            <View style={styles.from}>
              <TextInput
                onChangeText={text => this.setDataUser(text, 'password')}
                placeholder="password"
                secureTextEntry
                style={styles.fieldEmail}
              />
            </View>
            <View style={styles.from}>
              <TextInput
                onChangeText={text => this.setDataUser(text, 'confirm')}
                placeholder="confirm password"
                secureTextEntry
                style={styles.fieldEmail}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.clickSignIn()}
              style={styles.buttonNext}
            >
              <Text style={styles.txt}> SIGN UP </Text>
            </TouchableOpacity>
            <Text style={styles.err}> { this.state.err }</Text>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

Register.propTypes = {
  actionRegistration: PropTypes.func,
};

Register.defaultProps = {
  actionRegistration: {},
};
