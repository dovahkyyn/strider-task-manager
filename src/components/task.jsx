import React, { Component } from "react";

class Task extends Component {
  state = {
    showContainer: false
  };

  onShowContainer = () => {
    this.setState({ showContainer: !this.state.showContainer });
  };

  getContainerClass = () => {
    let result = "task-item-hidden-container";
    if (this.state.showContainer) {
      result = "task-item-shown-container";
    }
    return result;
  };

  render() {
    return (
      <div className="task-item-container">
        <label
          className={
            this.props.task.status == 1
              ? "task-item task-item-title-completed"
              : "task-item task-item-title"
          }
        >
          {this.props.task.title.toUpperCase()}
          <input
            type="checkbox"
            defaultChecked={this.props.task.status}
            onChange={() => {
              this.props.onModifyTask(this.props.task);
            }}
          />
          <span className="checkmark" />
          <button
            style={this.props.task.imageSrc ? {} : { display: "none" }}
            className="task-item-show-button"
            onClick={this.onShowContainer}
          />
        </label>
        <div className={this.getContainerClass()}>
          <img
            className="task-item-image"
            src={require("../placeholder.png")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Task;
