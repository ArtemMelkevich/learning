import {
  SET_DATA_USER,
  CLEAN_DATA_USER,
} from '../types';

export default function (state = '', action) {
  switch (action.type) {
    case SET_DATA_USER:
      return action.data;
    case CLEAN_DATA_USER:
      return [];
    default:
      return state;
  }
}
