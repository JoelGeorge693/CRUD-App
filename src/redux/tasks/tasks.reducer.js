import TaskActionTypes from "./tasks.types";
import { addTasksToArray, removeTasksFromArray } from "./tasks.utils";

const INITIAL_STATE = {
  createdTasks: [],
  pendingTasks: [],
  adandonTasks: [],
  completedTasks: [],
  inProgressTasks: [],
  currentTask: "Today's Tasks",
};

const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.CREATE_TASKS:
      return {
        ...state,
        createdTasks: addTasksToArray(state.createdTasks, action.payload),
      };
    case TaskActionTypes.PENDING_TASKS:
      return {
        ...state,
        pendingTasks: addTasksToArray(state.pendingTasks, action.payload),
      };
    case TaskActionTypes.ABANDON_TASKS:
      return {
        ...state,
        adandonTasks: addTasksToArray(state.adandonTasks, action.payload),
      };
    case TaskActionTypes.COMPLETED_TASKS:
      return {
        ...state,
        completedTasks: addTasksToArray(state.completedTasks, action.payload),
      };
    case TaskActionTypes.TASKS_IN_PROGRESS:
      return {
        ...state,
        inProgressTasks: addTasksToArray(state.inProgressTasks, action.payload),
      };
    case TaskActionTypes.CURRENT_TASK_TYPE:
      return {
        ...state,
        currentTask: action.payload,
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        createdTasks: removeTasksFromArray(state.createdTasks, action.payload),
      };
    case TaskActionTypes.DELETE_TASK_FROM_ABANDON:
      return {
        ...state,
        adandonTasks: removeTasksFromArray(state.adandonTasks, action.payload),
      };
    case TaskActionTypes.DELETE_TASK_FROM_COMPLETED:
      return {
        ...state,
        completedTasks: removeTasksFromArray(
          state.completedTasks,
          action.payload
        ),
      };
    case TaskActionTypes.DELETE_TASK_FROM_PENDING:
      return {
        ...state,
        pendingTasks: removeTasksFromArray(state.pendingTasks, action.payload),
      };
    case TaskActionTypes.DELETE_TASK_IN_PROGRESS:
      return {
        ...state,
        inProgressTasks: removeTasksFromArray(
          state.inProgressTasks,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
