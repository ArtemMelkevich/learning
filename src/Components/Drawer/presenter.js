import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  FlatList,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import imgBackArrow from '../../Resours/Icon/arrow.png';
import { listButtonsDrawer } from '../../Constants/index';
import ItemListDrawer from '../ItemListDrawer/index';
import styles from './style';

export default class SideMenu extends Component {
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
            renderItem={({ item }) => <ItemListDrawer title={item} actionGoToSelectScreen={() => this.navigateToScreen(item)} />}
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
  navigation: PropTypes.object,
};
