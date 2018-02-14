
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from '../../components/header/index';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Header title=''/>
        <Button 
          title='GO to Add Email'
          onPress={() => this.props.navigation.navigate('AddEmail')}
        /> 
      </View>
    );
  }
}


