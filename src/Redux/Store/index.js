import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from '../Auth/reducer';
import saga from '../Saga';


const sagaMiddleWare = createSagaMiddleware();

const rootReducers = combineReducers({
  auth,
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
const persistor = persistStore(store);

sagaMiddleWare.run(saga);

export default {
  store,
  persistor,
};
