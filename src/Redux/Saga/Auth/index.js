import { fork } from 'redux-saga/effects';

import {
  fetchRegistrationFork,
  fetchRLoginFork,
} from './auth';

export default function* () {
  yield fork(fetchRegistrationFork);
  yield fork(fetchRLoginFork);
}
