import { GET_TASKS_SUCCESS, GET_TASK_SUCCESS } from '../actions/types';

const initialState = {
  data: [],
  task: {},
};

export default (state = initialState, action) => {
  if (action.type === GET_TASKS_SUCCESS) {
    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === GET_TASK_SUCCESS) {
    return {
      ...state,
      task: action.payload,
    };
  }

  return state;
};
