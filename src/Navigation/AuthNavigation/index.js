import { StackNavigator } from 'react-navigation';

import SignIn from '../../Pages/SigninPage';
import Register from '../../Pages/RegisterPage';

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
