
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/index';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header
          title="menu"
          // navigate={this.props.navigation}
          actionOpenDrawer={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};
Home.defaultProps = {
  navigation: {},
};
