import React, { Component } from 'react';

import AuthRoot from './AuthRoot/index';


export default class Root extends Component {
  render() {
    console.warn(AuthRoot);
    return (
      <AuthRoot />
    );
  }
}
