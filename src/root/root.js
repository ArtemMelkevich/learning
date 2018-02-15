import { StackNavigator } from 'react-navigation';

import SignIn from '../pages/signin/index';
import Home from '../components/drawer/index';
import Register from '../pages/register/index';

const RootStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    Home: {
      screen: Home,
    },
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'SignIn',
    navigationOptions: {
      header: false,
      gesturesEnabled: false,
    },
  },
);

export default RootStack;
