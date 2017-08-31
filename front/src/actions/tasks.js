import {
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  CLEAR_EDITION,
} from './types';

import { get, put, post, remove } from '../utils/http';

export const getTasks = () => dispatch => (
  get('tasks').then(result => (
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: result.data.tasks,
    })
  ), error => (
    dispatch({
      type: GET_TASKS_ERROR,
      payload: error,
    })
  ))
);

export const getTask = id => dispatch => (
  get(`task/${id}`).then(result => (
    dispatch({
      type: GET_TASK_SUCCESS,
      payload: result.data.task,
    })
  ), error => (
    dispatch({
      type: GET_TASK_ERROR,
      payload: error,
    })
  ))
);

export const save = task => {
  if (task.id) {
    put(`task/update/${task.id}/${task.title}/${task.description}`);
    return;
  }

  post(`task/create/${task.title}/${task.description}`);
  return;
}

export const clearEdition = () => ({
  type: CLEAR_EDITION,
});

export const removeTask = id => remove(`/task/delete/${id}`);
