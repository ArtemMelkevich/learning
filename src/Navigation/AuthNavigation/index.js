import { StackNavigator } from 'react-navigation';

import SignIn from '../../Pages/HomePage/index';
import Register from '../../Pages/RegisterPage/index';

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
