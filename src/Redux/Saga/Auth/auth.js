import { takeEvery, call, put } from 'redux-saga/effects';

import * as AuthActionsRedux from '../../../Redux/Auth/actions';
import * as Query from '../../../Utils/Api';


const REGISTRATION = 'REGISTRATION';
const LOGIN = 'LOGIN';

export const apiAuthRegistration = (email, username, password, passwordConfirm) => ({
  type: REGISTRATION,
  email,
  username,
  password,
  passwordConfirm,
});

export const apiAuthLogin = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

function* fetchRegistration(data) {
  try {
    yield call(Query.signUp, data.email, data.username, data.password, data.passwordConfirm);
  } catch (error) {
    console.warn('Error', error);
  }
}

function* fetchLogin(data) {
  try {
    const result = yield call(Query.signIn, data.email, data.password);
    console.log(result.token);
    if (result.success) {
      yield put(AuthActionsRedux.setDataUser(result.username));
      yield put(AuthActionsRedux.setToken(result.token));
    } else if (result.message) {
      console.warn(result.massage);
    }
  } catch (error) {
    console.warn('Error', error);
  }
}

export function* fetchRegistrationFork() {
  yield takeEvery(REGISTRATION, fetchRegistration);
}
export function* fetchRLoginFork() {
  yield takeEvery(LOGIN, fetchLogin);
}
