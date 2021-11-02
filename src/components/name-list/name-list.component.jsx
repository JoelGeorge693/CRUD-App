import React, { useState } from "react";
import { connect } from "react-redux";
import "./name-list.styles.css";
// import {
//   createTasks,
//   pendingTasks,
//   abandonTasks,
//   completedTasks,
//   inProgressTasks,
// } from "../../redux/tasks/tasks.actions";

import NameBar from "../name-bar/name-bar.component";

class NameList extends React.Component {
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
    return (
      <div className="box">
        <h3>
          <span className="highlight">NAME LIST</span>
          <div className="date">
            <p className="date"> Today's Date:{this.state.currentDate} </p>
          </div>
        </h3>
        {this.props.nameCreated.length ? (
          this.props.nameCreated.map((name, index) => (
            <NameBar key={index} nameId={index} text={name} />
          ))
        ) : (
          <p>No Item found</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nameCreated: state.nameList.createdNames,
});

export default connect(mapStateToProps)(React.memo(NameList));
