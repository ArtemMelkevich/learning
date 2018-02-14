import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';
import { DrawerNavigator, NavigationActions } from 'react-navigation';

import imgBackArrow from '../../resours/icon/arrow.png';
import { listButtonsDrawer } from '../../constants/index';
import ItemListDrawer from '../itemListDrawer/index';
import styles from './style';

class SideMenu extends Component{

  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render(){
    return(
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
            renderItem={({item}) => <ItemListDrawer title={item} actionGoToSelectScreen={() => this.navigateToScreen(item)}/>}
            keyExtractor={(item, index) => `key-${index}`}
          />
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;