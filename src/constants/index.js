
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import stylesHeader from '../components/header/style'; 
import imgBackArrow from '../resours/icon/arrow.png';

// a function for handling on button click 
export const arrowButton = (actionBack) => (
  <TouchableOpacity 
    style={[stylesHeader.arrow_button, stylesHeader.button]}
    onPress={() => actionBack()}
  >
    <Image
      style={stylesHeader.image}
      source={imgBackArrow}  
    />
  </TouchableOpacity>
);

// list items of Drawer 
export const listButtonsDrawer = [ 'Sign in', 'Add email'];

// for header instead button "Back"
export const woxwork = <View style={stylesHeader.button}/>
