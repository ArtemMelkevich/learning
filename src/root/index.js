import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import HomeNavigation from '../Navigation/AuthNavigation';
import { store, persistor } from '../Redux/Store';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
