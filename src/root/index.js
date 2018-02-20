import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Root from './root';
import { store, persistor } from '../Redux/Store';
import * as api from '../Utils/Api';


export default class Main extends Component {
  render() {
    api.signIn('artem.ligghjghht.it@gmail.com', '123');
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}
