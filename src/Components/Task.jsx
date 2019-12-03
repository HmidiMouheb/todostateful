import React, { Component } from "react";
import { connect } from "react-redux";
import "./Task.css";
import deleteTask from "../actions/deleteTask";
import editTask from "../actions/editTask";
import completedTaskAction from "../actions/completedTaskAction";
import updateTask from "../actions/updateTask";
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedTaskName: ""
    };
  }

  deleteHandler = i => {
    return this.props.delete(i);
  };

  editHandler = i => {
    return this.props.edit(i);
  };

  completedTaskHandler = i => {
    return this.props.completed(i);
  };

  updateHandler = (i, e) => {
    e.preventDefault();

    this.props.update(i, this.state.updatedTaskName);
  };

  //   completeTakHandler = () => ({ textDecoration: "line-through" });

  render() {
    return this.props.task.todos.map((el, i) => (
      <div key={i} className="container">
        <button onClick={() => this.completedTaskHandler(i)}>Complete</button>
        <p style={el.isDone ? { textDecoration: "line-through" } : null}>
          {el.taskName}
        </p>
        {this.props.task.todos[i].wannaEdit ? (
          <form
            onSubmit={e => this.updateHandler(i, e, this.state.updatedTaskName)}
          >
            <input
              type="text"
              onChange={e => this.setState({ updatedTaskName: e.target.value })}
            />
          </form>
        ) : null}
        <button onClick={() => this.editHandler(i)}>Edit</button>
        <button onClick={() => this.deleteHandler(i)}>Delete</button>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  delete: deleteTask,
  edit: editTask,
  completed: completedTaskAction,
  update: updateTask
};

export default connect(mapStateToProps, mapActionsToProps)(Task);
