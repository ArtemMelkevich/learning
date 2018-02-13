
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View >
        <Text >
          Screen One
        </Text>
        <Button
            title='Move to AddEmail'
            onPress={() => { 
                this.props.navigation.navigate('AddEmail');
            }}
        />
      </View>
    );
  }
}


