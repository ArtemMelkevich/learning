import { DrawerNavigator } from 'react-navigation';

import Home from '../../Pages/HomePage';
import Profil from '../../Pages/ProfilPage';
import SideMenu from '../../Components/Home';

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
