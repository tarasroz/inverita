import { ADD_TASK } from '../constants';

export const addTast = (id, text) => ({
  type: ADD_TASK,
  id,
  text,
});