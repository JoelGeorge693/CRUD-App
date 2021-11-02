import React from "react";

import "./search-bar.styles.scss";
import { createName } from "../../redux/names/name.actions";

import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const { createName } = this.props;
    let nameCreated = "";
    if (this._inputElement.value !== "") {
      nameCreated = this._inputElement.value;
      createName(nameCreated);
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
          placeholder="Type a name"
        />
        <button className="btn-search__btn">
          <span>Add</span>
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.nameList.currentName,
});

const mapDispatchToProps = (dispatch) => ({
  createName: (tasks) => dispatch(createName(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
