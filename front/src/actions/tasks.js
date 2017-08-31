import {
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
} from './types';

import { get } from '../utils/http';

export const getTasks = () => (dispatch) => (
  get('tasks').then((result) => (
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: result.data.tasks,
    })
  ), (error) => (
    dispatch({
      type: GET_TASKS_ERROR,
      payload: error,
    })
  ))
);
