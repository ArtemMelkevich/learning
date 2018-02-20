import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { apiAuthLogin } from '../../Redux/Saga/Auth/auth';
import Signin from '../../Components/Signin';

class SignIn extends Component {
  render() {
    return (
      <Signin
        navigation={this.props.navigation}
        actionLogin={this.props.apiAuthLogin}
      />
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object,
  apiAuthLogin: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  navigation: {},
};

const mapDispatchToProps = { apiAuthLogin };

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
