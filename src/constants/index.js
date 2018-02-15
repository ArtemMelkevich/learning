import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import stylesHeader from '../components/header/style';
import imgBackArrow from '../resours/icon/arrow.png';
import imgDrowerMenu from '../resours/icon/menu.png';

export const arrowButton = actionBack => (
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

export const menuButton = actionOpenDrawer => (
  <TouchableOpacity
    style={[stylesHeader.arrow_button, stylesHeader.button]}
    onPress={() => actionOpenDrawer()}
  >
    <Image
      style={stylesHeader.image}
      source={imgDrowerMenu}
    />
  </TouchableOpacity>
);

// list items of Drawer
export const listButtonsDrawer = ['Home', 'Profil'];

// colors for LinearGradient
export const color = ['#FFCCCC', '#FF0000', '#000000'];

// for header instead button "Back"
export const woxwork = <View style={stylesHeader.button} />;

export const colors = {
  colorField: '#FFCCCC',
  buttonNext: '#FF1493',
  txt: '#ffffff',
  txtRegister: '#1E90FF',
};
