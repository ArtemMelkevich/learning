import {
  SET_DATA_USER,
  CLEAN_DATA_USER,
} from './types';

export const setDataUser = data => ({
  type: SET_DATA_USER,
  data,
});

export const cleanDataUser = () => ({
  type: CLEAN_DATA_USER,
});
