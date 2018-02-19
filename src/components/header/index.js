
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import imgBackArrow from '../../Resours/Icon/arrow.png';
import imgDrowerMenu from '../../Resours/Icon/menu.png';


const woxwork = <View style={styles.button} />;
const arrowButton = actionBack => (
  <TouchableOpacity
    style={[styles.arrow_button, styles.button]}
    onPress={() => actionBack()}
  >
    <Image
      style={styles.image}
      source={imgBackArrow}
    />
  </TouchableOpacity>
);
const menuButton = actionOpenDrawer => (
  <TouchableOpacity
    style={[styles.arrow_button, styles.button]}
    onPress={() => actionOpenDrawer()}
  >
    <Image
      style={styles.image}
      source={imgDrowerMenu}
    />
  </TouchableOpacity>
);


export default class Header extends Component {
  showHeader(title, actionBack, actionOpenDrawer) {
    switch (title) {
      case 'back':
        return arrowButton(actionBack);

      case 'menu':
        return menuButton(actionOpenDrawer);

      default:
        return woxwork;
    }
  }
  render() {
    const {
      title,
      actionBack,
      actionOpenDrawer,
    } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          {
            this.showHeader(title, actionBack, actionOpenDrawer)
          }
          <View sytle={styles.button}>
            <Text style={styles.text}> Title </Text>
          </View>
          <View style={styles.button} />
        </View>
      </View>
    );
  }
}
