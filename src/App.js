import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/navbar.jsx";
import NewTaskBar from "./components/newTaskBar";
import TaskList from "./components/taskList";

class App extends Component {
  // status: 0 => pending; 1 => completed
  state = {
    tasks: [
      { id: 0, status: 1, title: "Finalizar desafio de criação", imageSrc: "" },
      { id: 1, status: 1, title: "Pensar e analisar", imageSrc: "" },
      {
        id: 2,
        status: 0,
        title: "Definir layout e design",
        imageSrc: "./placeholder.png"
      },
      { id: 3, status: 0, title: "Pesquisar referências", imageSrc: "" },
      { id: 4, status: 0, title: "Enviar relatório", imageSrc: "" }
    ]
  };

  handlerAddTask = taskTitle => {
    const tasks = this.state.tasks;
    const taskId = tasks[tasks.length - 1].id + 1;
    tasks.push({ id: taskId, status: 0, title: taskTitle, imageSrc: "" });
    this.setState({ tasks });

    console.log(this.state.tasks);
  };

  handlerModifyTask = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].status = tasks[index].status == 0 ? 1 : 0;
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <div className="background-image" />
        <div className="background-cover" />
        <Navbar />
        <NewTaskBar onAddTask={this.handlerAddTask} />
        <TaskList
          tasks={this.state.tasks}
          onModifyTask={this.handlerModifyTask}
        />
      </div>
    );
  }
}

export default App;
