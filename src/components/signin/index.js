import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { color } from '../../constants/index';
import styles from './style';

export default class SignIn extends Component {
  render() {
    return (
      <LinearGradient
        colors={color}
        style={styles.container}
      >
        <View style={styles.containerForm}>
          <View style={styles.containerFormFields}>
            <TextInput
              placeholder="Email"
              style={styles.fieldEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.fieldPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.props.navigate.navigate('Home')}
          >
            <Text style={styles.txt}> SIGN IN </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonRegistretion}
          onPress={() => this.props.navigate.navigate('Register')}
        >
          <Text style={styles.txtRegister}> Registetion </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
SignIn.propTypes = {
  navigate: PropTypes.object,
};
SignIn.defaultProps = {
  navigate: {},
};
