import React, { useState } from "react";
import "./name-bar.styles.scss";
import { connect } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import { createName, deleteName } from "../../redux/names/name.actions";
const NameBar = ({ nameId, text, deleteName }) => {
  const [editable, changeStatus] = useState(false);
  // Setting Default value of newName to text
  const [newName, changeName] = useState(text);

  const handleChange = (e) => {
    changeName(e.target.value);
  };

  return (
    <div>
      <h5 className="names">
        {/* Showing Information according to the edited or default value */}
        {editable ? (
          <input
            id={nameId}
            type="text"
            onChange={handleChange}
            defaultValue={text}
            required
          />
        ) : (
          newName
        )}
        <div className="icons">
          <div
            onClick={() => {
              deleteName(nameId);
            }}
          >
            <AiFillDelete className="delete-icon" />
          </div>
          <div onClick={() => changeStatus(true)}>
            <AiFillEdit className="edit-icon" />
          </div>
          <div
            onClick={() => {
              changeStatus(false);
            }}
          >
            <FcOk className="confirm-icon" />
          </div>
        </div>
      </h5>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createName: (name) => dispatch(createName(name)),
  deleteName: (name) => dispatch(deleteName(name)),
});

export default connect(null, mapDispatchToProps)(React.memo(NameBar));
