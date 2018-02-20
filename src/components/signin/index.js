import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { color } from '../../Constants';
import styles from './style';
import { store } from '../../Redux/Store';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  setDataForLogin(data, id) {
    switch (id) {
      case 'email':
        this.setState({
          email: `${data}`,
        });
        break;
      case 'password':
        this.setState({
          password: `${data}`,
        });
        break;
      default:
        break;
    }
  }

  makeLogin() {
    this.props.actionLogin(this.state.email, this.state.password);
  }

  render() {
    store.subscribe(() => console.warn(store.getState()));
    return (
      <LinearGradient
        colors={color}
        style={styles.container}
      >
        <View style={styles.containerForm}>
          <View style={styles.containerFormFields}>
            <TextInput
              onChangeText={text => this.setDataForLogin(text, 'email')}
              placeholder="Email"
              keyboardType="email-address"
              style={styles.fieldEmail}
            />
            <TextInput
              onChangeText={text => this.setDataForLogin(text, 'password')}
              placeholder="Password"
              secureTextEntry
              style={styles.fieldPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.makeLogin()}
          >
            <Text style={styles.txt}> SIGN IN </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonRegistretion}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.txtRegister}> Registetion </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
SignIn.propTypes = {
  navigation: PropTypes.object,
  actionLogin: PropTypes.func.isRequired,
};
SignIn.defaultProps = {
  navigation: {},
};
