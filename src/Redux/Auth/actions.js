import {
  SET_DATA_USER,
  CLEAN_DATA_USER,
  SET_TOKEN,
} from './types';

export const setDataUser = data => ({
  type: SET_DATA_USER,
  data,
});

export const setToken = data => ({
  type: SET_TOKEN,
  data,
});

export const cleanDataUser = () => ({
  type: CLEAN_DATA_USER,
});
