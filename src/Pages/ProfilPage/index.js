
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../Components/Header';

export default class AddEmail extends Component {
  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View >
        <Header title="back" actionBack={() => this.goBack()} />
        <Icon name="area-chart" />
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
