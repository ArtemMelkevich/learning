import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Drawer from '../components/drawer/index';

export default class Root extends Component{ 
  render() {
    return  ( <Drawer/> );
  }
}
