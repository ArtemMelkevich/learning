import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormRegisterEmail from '../../Components/Register';

class Register extends Component {
  render() {
    return (
      <FormRegisterEmail navigate={this.props.navigation} />
    );
  }
}

Register.propTypes = {
  navigation: PropTypes.object,
};

Register.defaultProps = {
  navigation: {},
};
