import React, { Component } from "react";

class NewTaskBar extends Component {
  state = {
    taskTitle: ""
  };

  handlerSubmit = e => {
    this.props.onAddTask(this.state.taskTitle);
    document.getElementById("new-task-title").value = "";
    this.setState({ taskTitle: "" });
    e.preventDefault();
  };

  handlerTaskTitleChange = e => {
    this.setState({ taskTitle: e.target.value });
  };

  render() {
    return (
      <div className="new-task-container">
        <form onSubmit={this.handlerSubmit}>
          <button className="new-task-button plus" />
          <input
            id="new-task-title"
            type="text"
            className="new-task-input"
            placeholder="O que precisa ser feito?"
            onChange={this.handlerTaskTitleChange}
            maxlength="120"
            required
          />
        </form>
      </div>
    );
  }
}

export default NewTaskBar;
