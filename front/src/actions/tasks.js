import {
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  SAVE_TASK_SUCCESS,
  SAVE_TASK_ERROR,
} from './types';

import { get, put, post } from '../utils/http';

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

export const save = task => dispatch => {
  const success = result => dispatch({
    type: SAVE_TASK_SUCCESS,
    payload: task,
  });

  const error = error => dispatch({
    type: SAVE_TASK_ERROR,
  });

  console.log(task)

  if (task.id) {
    put(`task/update/${task.id}/${task.title}/${task.description}`).then(success, error);
    return;
  }

  post(`task/create/${task.title}/${task.description}`).then(success, error);
  return;
}
