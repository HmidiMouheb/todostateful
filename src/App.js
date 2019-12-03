import React from "react";
import { connect } from "react-redux";
import { addTaskAction } from "./actions/addTaskAction";
import Task from "./Components/Task";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ""
    };
  }

  addTaskHandler = t => {
    this.props.addTask(t);
    this.setState({taskName:""})
  };

  render() {
    return (
      <div className="App">
        <h1>To do App!</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input
            onChange={e => this.setState({ taskName: e.target.value })}
            type="text"
            value={this.state.taskName}
          ></input>
          <button onClick={() => this.addTaskHandler(this.state.taskName)}>Addtask</button>
        </form>
        <Task />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return state;
// };

const mapActionsToProps = {
  addTask: addTaskAction
};

export default connect(null, mapActionsToProps)(App);
