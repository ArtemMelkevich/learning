import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiAuthRegistration } from '../../Redux/Saga/Auth/auth';

import FormRegisterEmail from '../../Components/Register';

class Register extends Component {
  render() {
    return (
      <FormRegisterEmail
        navigation={this.props.navigation}
        actionRegistration={this.props.apiAuthRegistration}
      />
    );
  }
}

Register.propTypes = {
  navigation: PropTypes.object,
  apiAuthRegistration: PropTypes.func.isRequired,
};

Register.defaultProps = {
  navigation: {},
};

const mapDispatchToProps = { apiAuthRegistration };

export default connect(
  null,
  mapDispatchToProps,
)(Register);
