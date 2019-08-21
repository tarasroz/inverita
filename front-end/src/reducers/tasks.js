import { ADD_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: '_list_' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, text, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
        }
      ];
    default:
      return state;
  }
}

export default tasks;
