import { DrawerNavigator } from 'react-navigation';

import Home from '../../pages/home/index';
import Profil from '../../pages/profil/index';
import SideMenu from './presenter';

export default DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Profil: {
      screen: Profil,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
  },
);
