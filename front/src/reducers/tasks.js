import { GET_TASKS_SUCCESS } from '../actions/types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  if (action.type === GET_TASKS_SUCCESS) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};
