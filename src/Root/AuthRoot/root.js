import { StackNavigator } from 'react-navigation';

import SignIn from '../../Pages/Signin/index';
import Register from '../../Pages/Register/index';

const RootStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
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
