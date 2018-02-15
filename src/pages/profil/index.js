
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from '../../components/header/index';

export default class AddEmail extends Component {
  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View >
        <Header title="back" actionBack={() => this.goBack()} />
        <Text >
              Screen Add Email
        </Text>
      </View>
    );
  }
}
