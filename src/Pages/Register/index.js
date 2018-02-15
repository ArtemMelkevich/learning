import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormRegisterEmail from '../../Components/Form/index';

export default class Register extends Component {
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
