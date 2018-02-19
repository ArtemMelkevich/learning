
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../Components/Header';

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

AddEmail.propTypes = {
  navigation: PropTypes.object,
};

AddEmail.defaultProps = {
  navigation: {},
};
