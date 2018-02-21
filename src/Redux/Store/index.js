import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { user, token } from '../Auth/Reducers';
import saga from '../Saga';


const sagaMiddleWare = createSagaMiddleware();

const rootReducers = combineReducers({
  user,
  token,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare, logger));
export const persistor = persistStore(store);

sagaMiddleWare.run(saga);
