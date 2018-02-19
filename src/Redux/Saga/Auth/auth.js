import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as Query from '../../../Utils/Api';
import * as authActions from '../../Auth/actions';

const REGISTRATION = 'REGISTRATION';

export const apiAuthRegistration = (email, username, password, passwordConfirm) => ({
  type: REGISTRATION,
  email,
  username,
  password,
  passwordConfirm,
});

function* fetchRegistration(data) {
  try {
    const response = yield Query.signIn(data.email, data.username, data.password, data.password_confirm);
    if (response.success) {
      console.warn('response.message');
    } else {
      console.warn('response.message');
    }
  } catch (error) {
    console.warn(console.error());
  }
}

export function* fetchRegistrationFork() {
  yield takeEvery(REGISTRATION, fetchRegistration);
}
