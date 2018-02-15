import { DrawerNavigator } from 'react-navigation';

import Home from '../../Pages/Home/index';
import Profil from '../../Pages/Profil/index';
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
