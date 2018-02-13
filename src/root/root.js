import React from 'react';
import { StackNavigator } from 'react-navigation';

import SignInScreen from '../pages/signin/index';
import AddEmailScreen from '../pages/addemail/index';


const RootStack = StackNavigator (
    {
        SignIn: {
            screen: SignInScreen,
        },
        AddEmail: {
            screen: AddEmailScreen,
        },
    },
    {
        initialRouteName: 'SignIn',
        navigationOptions: ({ navigation }) => ({
            header: false,
        }),
    },
);

export default RootStack;