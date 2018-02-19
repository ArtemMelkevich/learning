import { fork } from 'redux-saga/effects';

import { fetchRegistrationFork } from './auth';

export default function* () {
  yield fork(fetchRegistrationFork);
}
