import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AuthNavigation from '../Navigation/AuthNavigation';
import HomeNavigation from '../Navigation/HomeNavigation';
import styles from './style';

class Root extends Component {
  showNeenedStack() {
    if (this.props.token) {
      return <HomeNavigation />;
    }
    return <AuthNavigation />;
  }

  render() {
    return (
      <View style={styles.view}>
        { this.showNeenedStack() }
      </View>
    );
  }
}

Root.propTypes = {
  token: PropTypes.string,
};

Root.defaultProps = {
  token: '',
};

export default connect(state => ({ token: state.token }))(Root);
