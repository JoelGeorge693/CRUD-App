import React from "react";

import "./tasks.styles.scss";
import { connect } from "react-redux";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { FaHourglassHalf } from "react-icons/fa";
import {
  createTasks,
  pendingTasks,
  abandonTasks,
  completedTasks,
  inProgressTasks,
  deleteTask,
  deleteTaskFromAbandon,
  deleteTaskFromCompleted,
  deleteTaskFromPending,
  deleteTaskInProgress,
} from "../../redux/tasks/tasks.actions";
import { daysPassed } from "../../redux/tasks/tasks.utils";
const TaskBar = ({
  todayTaskId,
  pendingTaskId,
  abandonTaskId,
  completedTaskId,
  taskInProgressId,
  text,
  deleteTask,
  abandonTasks,
  completedTasks,
  pendingTasks,
  deleteTaskFromCompleted,
  currentTask,
  deleteTaskFromAbandon,
  deleteTaskFromPending,
  deleteTaskInProgress,
}) => {
  if (daysPassed > 0) {
    deleteTask(todayTaskId);
    inProgressTasks(text);
  }
  switch (currentTask) {
    case "Today's Tasks":
      return (
        <div>
          <h5 className="tasks">
            {text}
            <div className="icons">
              <div
                onClick={() => {
                  abandonTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCancel className="cancel-icon" />
              </div>
              <div
                onClick={() => {
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <AiFillDelete className="delete-icon" />
              </div>
              <div
                onClick={() => {
                  completedTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCheckmark className="complete-icon" />
              </div>
              <div
                onClick={() => {
                  pendingTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FaHourglassHalf className="pending-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
    case "Pending Tasks":
      return (
        <div>
          <h5 className="tasks">
            {text}
            <div className="icons">
              <div
                onClick={() => {
                  abandonTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCancel className="cancel-icon" />
              </div>
              <div
                onClick={() => {
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <AiFillDelete className="delete-icon" />
              </div>
              <div
                onClick={() => {
                  completedTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCheckmark className="complete-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
    case "Abandoned Tasks":
      return (
        <div>
          <h5 className="tasks">
            {text}
            <div className="icons">
              <div onClick={() => deleteTaskFromAbandon(abandonTaskId)}>
                <AiFillDelete className="delete-icon" />
              </div>
              <div
                onClick={() => {
                  completedTasks(text);
                  deleteTaskFromAbandon(abandonTaskId);
                }}
              >
                <FcCheckmark className="complete-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
    case "Completed Tasks":
      return (
        <div>
          <h5 className="tasks" id="completed">
            {text}
            <div className="icons">
              <div
                onClick={() => {
                  deleteTaskFromCompleted(completedTaskId);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <AiFillDelete className="delete-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
    case "Tasks In Progress":
      return (
        <div>
          <h5 className="tasks">
            {text}
            <div className="icons">
              <div
                onClick={() => {
                  abandonTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCancel className="cancel-icon" />
              </div>
              <div
                onClick={() => {
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <AiFillDelete className="delete-icon" />
              </div>
              <div
                onClick={() => {
                  completedTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCheckmark className="complete-icon" />
              </div>
              <div
                onClick={() => {
                  pendingTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FaHourglassHalf className="pending-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
    default:
      return (
        <div>
          <h5 className="tasks">
            {text}
            <div className="icons">
              <div
                onClick={() => {
                  abandonTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCancel className="cancel-icon" />
              </div>
              <div onClick={() => deleteTask(todayTaskId)}>
                <AiFillDelete className="delete-icon" />
              </div>
              <div
                onClick={() => {
                  completedTasks(text);
                  deleteTask(todayTaskId);
                  deleteTaskFromPending(pendingTaskId);
                  deleteTaskInProgress(taskInProgressId);
                }}
              >
                <FcCheckmark className="complete-icon" />
              </div>
            </div>
          </h5>
        </div>
      );
  }
};

const mapDispatchToProps = (dispatch) => ({
  createTasks: (tasks) => dispatch(createTasks(tasks)),
  pendingTasks: (tasks) => dispatch(pendingTasks(tasks)),
  abandonTasks: (tasks) => dispatch(abandonTasks(tasks)),
  completedTasks: (tasks) => dispatch(completedTasks(tasks)),
  inProgressTasks: (tasks) => dispatch(inProgressTasks(tasks)),
  deleteTask: (tasks) => dispatch(deleteTask(tasks)),
  deleteTaskFromAbandon: (tasks) => dispatch(deleteTaskFromAbandon(tasks)),
  deleteTaskFromCompleted: (tasks) => dispatch(deleteTaskFromCompleted(tasks)),
  deleteTaskFromPending: (tasks) => dispatch(deleteTaskFromPending(tasks)),
  deleteTaskInProgress: (tasks) => dispatch(deleteTaskInProgress(tasks)),
});

const mapStateToProps = (state) => ({
  currentTask: state.taskList.currentTask,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(TaskBar));
