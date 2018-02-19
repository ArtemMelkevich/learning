import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Signin from '../../Components/Signin';

export default class SignIn extends Component {
  render() {
    return (
      <Signin navigate={this.props.navigation} />
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object,
};

SignIn.defaultProps = {
  navigation: {},
};
