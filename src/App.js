import "./App.css";
import React, { Component } from "react";
import Item from "./Components/Item";

export default class App extends Component {
  state = {
    grabbedValue: "",
    taskList: []
  };

  doneHandler = (i) => {
    let newState = this.state.taskList;
    newState[i].isDone = true;
    this.setState({
      taskList: newState
});
    
  };
  deleteHandler = (i) => {
    let newState = this.state.taskList;
    newState.splice(i, 1);
    this.setState({
      taskList: newState
    });
  };
  grabValue = parm => {
    this.setState({ grabbedValue: parm });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      taskList: [
        ...this.state.taskList,
        { taskName: this.state.grabbedValue, isDone: false, id: 5 }
      ],
      grabbedValue: ""
    });
  };

  render() {
    console.log(this.state.taskList);
    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={e => this.grabValue(e.target.value)}
            value={this.state.grabbedValue}
          ></input>
          <button onClick={this.addTask}>Add</button>
        </div>
        <main>
          <p>Let's get some work done!</p>
          <Item taskList={this.state.taskList} undoHandler={this.doneHandler} deleteHandler={this.deleteHandler} />
        </main>
      </div>
    );
  }
}
