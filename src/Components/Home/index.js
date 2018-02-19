import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  FlatList,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import imgBackArrow from '../../Resours/Icon/arrow.png';
import { listButtonsDrawer } from '../../Constants';
import ItemListDrawer from '../ItemSideMenu';
import styles from './style';

export default class SideMenu extends Component {
  setItemList(item) {
    return (
      <ItemListDrawer title={item} actionGoToSelectScreen={() => this.navigateToScreen(item)} />
    );
  }

  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <View style={styles.iconCont}>
            <Image
              style={styles.img}
              source={imgBackArrow}
            />
          </View>
        </View>
        <View>
          <FlatList
            data={listButtonsDrawer}
            renderItem={({ item }) => this.setItemList(item)}
            keyExtractor={(item, index) => `key-${index}`}
          />
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

SideMenu.defaultProps = {
  navigation: {},
};
