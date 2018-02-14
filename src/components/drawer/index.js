import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import SignIn from '../../pages/signin/index';
import AddEmail from '../../pages/addemail/index';
import SideMenu from './presnter';

export default DrawerNavigator ({
     "Sign in": {
       screen: SignIn,
     },
     "Add email": {
       screen: AddEmail,
     }
   },
   {
     initialRouteName: 'Sign in',
     contentComponent: SideMenu,
   }    
);