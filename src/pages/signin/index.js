
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Signin from '../../components/signin/index';

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
