import React, { Component } from "react";
import { link } from "fs";
import Task from "./task";

class TaskList extends Component {
  state = {
    activeTab: 1
  };

  handlerTabs = activeTab => {
    this.setState({ activeTab });
  };

  getHeaderClass = () => {
    let result = "task-list-header ";
    switch (this.state.activeTab) {
      case 1:
        result += "task-list-header-first-active";
        break;
      case 2:
        result += "task-list-header-second-active";
        break;
      case 3:
        result += "task-list-header-third-active";
        break;
      default:
        break;
    }
    return result;
  };

  getTasks = () => {
    switch (this.state.activeTab) {
      case 1:
        return this.props.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onModifyTask={this.props.onModifyTask}
          />
        ));
      case 2:
        return this.props.tasks
          .filter(task => task.status == 0)
          .map(task => (
            <Task
              key={task.id}
              task={task}
              onModifyTask={this.props.onModifyTask}
            />
          ));
      case 3:
        return this.props.tasks
          .filter(task => task.status == 1)
          .map(task => (
            <Task
              key={task.id}
              task={task}
              onModifyTask={this.props.onModifyTask}
            />
          ));
      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.getHeaderClass()}>
          <button
            onClick={() => {
              this.handlerTabs(1);
            }}
            className="task-list-button task-list-separator"
          >
            TODOS
          </button>
          <button
            onClick={() => {
              this.handlerTabs(2);
            }}
            className="task-list-button task-list-separator"
          >
            PENDENTES
          </button>
          <button
            onClick={() => {
              this.handlerTabs(3);
            }}
            className="task-list-button"
          >
            FEITOS
          </button>
        </div>
        <div className="task-list-body">{this.getTasks()}</div>
      </React.Fragment>
    );
  }
}

export default TaskList;
