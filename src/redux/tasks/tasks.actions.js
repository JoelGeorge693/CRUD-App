import TaskActionTypes from "./tasks.types";

export const createTasks = (tasks) => ({
  type: TaskActionTypes.CREATE_TASKS,
  payload: tasks,
});

export const pendingTasks = (pendingTasks) => ({
  type: TaskActionTypes.PENDING_TASKS,
  payload: pendingTasks,
});

export const abandonTasks = (abandonTasks) => ({
  type: TaskActionTypes.ABANDON_TASKS,
  payload: abandonTasks,
});

export const completedTasks = (completedTasks) => ({
  type: TaskActionTypes.COMPLETED_TASKS,
  payload: completedTasks,
});

export const inProgressTasks = (inprogressTasks) => ({
  type: TaskActionTypes.TASKS_IN_PROGRESS,
  payload: inprogressTasks,
});

export const updateTaskSheet = (taskSheet) => ({
  type: TaskActionTypes.CURRENT_TASK_TYPE,
  payload: taskSheet,
});

export const deleteTask = (task) => ({
  type: TaskActionTypes.DELETE_TASK,
  payload: task,
});

export const deleteTaskFromAbandon = (task) => ({
  type: TaskActionTypes.DELETE_TASK_FROM_ABANDON,
  payload: task,
});

export const deleteTaskFromCompleted = (task) => ({
  type: TaskActionTypes.DELETE_TASK_FROM_COMPLETED,
  payload: task,
});

export const deleteTaskFromPending = (task) => ({
  type: TaskActionTypes.DELETE_TASK_FROM_PENDING,
  payload: task,
});

export const deleteTaskInProgress = (task) => ({
  type: TaskActionTypes.DELETE_TASK_IN_PROGRESS,
  payload: task,
});
