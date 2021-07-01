import React, { useState } from "react";
import { connect } from "react-redux";
import "./todo-list.styles.css";
// import {
//   createTasks,
//   pendingTasks,
//   abandonTasks,
//   completedTasks,
//   inProgressTasks,
// } from "../../redux/tasks/tasks.actions";

import TaskBar from "../tasks/task.component";

class TodoList extends React.Component {
  constructor() {
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    super();
    this.state = {
      currentDate: displayDate,
    };
  }

  render() {
    switch (this.props.currentTask) {
      case "Today's Tasks":
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
              <div className="date">
                <p className="date"> Today's Date:{this.state.currentDate} </p>
              </div>
            </h3>
            {this.props.taskCreated.length ? (
              this.props.taskCreated.map((task, index) => (
                <TaskBar key={index} todayTaskId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
      case "Pending Tasks":
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
            </h3>
            {this.props.taskPending.length ? (
              this.props.taskPending.map((task, index) => (
                <TaskBar key={index} pendingTaskId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
      case "Abandoned Tasks":
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
            </h3>
            {this.props.taskAbandoned.length ? (
              this.props.taskAbandoned.map((task, index) => (
                <TaskBar key={index} abandonTaskId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
      case "Completed Tasks":
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
            </h3>
            {this.props.taskCompleted.length ? (
              this.props.taskCompleted.map((task, index) => (
                <TaskBar key={index} completedTaskId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
      case "Tasks In Progress":
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
            </h3>
            {this.props.taskInProgress.length ? (
              this.props.taskInProgress.map((task, index) => (
                <TaskBar key={index} taskInProgressId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
      default:
        return (
          <div className="box">
            <h3>
              <span className="highlight">TODO LIST</span>
              <div className="date">
                <p className="date"> Today's Date:{this.state.currentDate} </p>
              </div>
            </h3>
            {this.props.taskCreated.length ? (
              this.props.taskCreated.map((task, index) => (
                <TaskBar key={index} todayTaskId={index} text={task} />
              ))
            ) : (
              <p>No Item found</p>
            )}
          </div>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  taskCreated: state.taskList.createdTasks,
  taskPending: state.taskList.pendingTasks,
  taskAbandoned: state.taskList.adandonTasks,
  taskCompleted: state.taskList.completedTasks,
  taskInProgress: state.taskList.inProgressTasks,
  currentTask: state.taskList.currentTask,
});

// const mapDispatchToProps = (dispatch) => ({
//   createTasks: (tasks) => dispatch(createTasks(tasks)),
//   pendingTasks: (tasks) => dispatch(pendingTasks(tasks)),
//   abandonTasks: (tasks) => dispatch(abandonTasks(tasks)),
//   completedTasks: (tasks) => dispatch(completedTasks(tasks)),
//   inProgressTasks: (tasks) => dispatch(inProgressTasks(tasks)),
// });

export default connect(mapStateToProps)(React.memo(TodoList));
