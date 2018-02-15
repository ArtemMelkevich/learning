import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import stylesHeader from '../Components/Header/style';
import imgBackArrow from '../Resours/Icon/arrow.png';
import imgDrowerMenu from '../Resours/Icon/menu.png';

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
  header: '#d3d3d3',
  headerContainer: '#d3d3d3',
  txtHeader: '#1E90FF',
};
