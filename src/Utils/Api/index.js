import { create } from 'apisauce';

import {
  API_QUERY,
  POST_SIGNUP,
} from '../../Constants/config';

const api = create({
  baseURL: API_QUERY,
});

export const signIn = (_email, _username, _password, _confirmPassword) => {
  api.post(POST_SIGNUP, {
    email: _email,
    username: _username,
    password: _password,
    password_confirm: _confirmPassword,
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => console.warn(JSON.stringify(response.data)));
};
