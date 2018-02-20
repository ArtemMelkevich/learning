import { create } from 'apisauce';

import {
  API_QUERY,
  POST_SIGNUP,
  POST_LOGIN,
} from '../../Constants/config';

const api = create({
  baseURL: API_QUERY,
});


export const signUp = (_email, _username, _password, _confirmPassword) => {
  return api.post(POST_SIGNUP, {
    email: _email,
    username: _username,
    password: _password,
    password_confirm: _confirmPassword,
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const signIn = (_email, _password) => {
  return api.post(POST_LOGIN, {
    email: _email,
    password: _password,
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
