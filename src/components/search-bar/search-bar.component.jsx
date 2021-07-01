import React from "react";

import "./search-bar.styles.scss";
import {
  createTasks,
  pendingTasks,
  abandonTasks,
  completedTasks,
  inProgressTasks,
  updateTaskSheet,
} from "../../redux/tasks/tasks.actions";

import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleChange = (event) => {
    const { updateTaskSheet } = this.props;
    let { value } = this.props;
    value = event.target.value;

    updateTaskSheet(value);
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const { createTasks, inProgressTasks } = this.props;
    let taskCreated = "";
    if (this._inputElement.value !== "") {
      taskCreated = this._inputElement.value;
      createTasks(taskCreated);
      inProgressTasks(taskCreated);
    }

    this._inputElement.value = "";
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="search">
        <input
          ref={(a) => (this._inputElement = a)}
          type="text"
          className="search__field"
          placeholder="Create A Task"
        />
        <button className="btn-search__btn">
          <span>Add</span>
        </button>
        <select value={this.props.value} onChange={this._handleChange}>
          <option value="Today's Tasks">Today's Tasks</option>
          <option value="Pending Tasks">Pending Tasks</option>
          <option value="Abandoned Tasks">Abandoned Tasks</option>
          <option value="Completed Tasks">Completed Tasks</option>
          <option value="Tasks In Progress">Tasks In Progress</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // taskCreated: state.taskList.createdTasks,
  // taskPending: state.taskList.pendingTasks,
  // taskAbandoned: state.taskList.adandonTasks,
  // taskCompleted: state.taskList.completedTasks,
  // taskInProgress: state.taskList.inProgressTasks,
  value: state.taskList.currentTask,
});

const mapDispatchToProps = (dispatch) => ({
  createTasks: (tasks) => dispatch(createTasks(tasks)),
  pendingTasks: (tasks) => dispatch(pendingTasks(tasks)),
  abandonTasks: (tasks) => dispatch(abandonTasks(tasks)),
  completedTasks: (tasks) => dispatch(completedTasks(tasks)),
  inProgressTasks: (tasks) => dispatch(inProgressTasks(tasks)),
  updateTaskSheet: (taskSheet) => dispatch(updateTaskSheet(taskSheet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
