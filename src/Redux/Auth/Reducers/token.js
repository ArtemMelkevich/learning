import {
  SET_TOKEN,
} from '../types';

export default (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.data;

    default:
      return state;
  }
};
