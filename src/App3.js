
    // let newlist = this.state.list
    // this.setState({
    //   newlist:
    //  { task: input,
    //   isDone:false,
    //   id:id,}
    //   });
    //   this.setState({list: newlist})

import "./App.css";
import Item from "./Components/Item";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tempValue: "",
      task: null,
      list: []
    };
  }

  setTask = (e) => {
    // let newtask = {
    //   task:input,
    //   isdone:false,
    //   id:id,
    // }
    console.log(e.target.value)
    // this.setState({
    //   task: {
    //   task:e.target.value,
    //   isdone:false,
    // }})
    

  };

  addToTasks = (task) => {
    // let newlist = this.state.list;
    // newlist.push(task);

    this.setState({ 
      list:[...this.state.list, task],
      task: {},
      tempValue:""
     });
  };
  
  // completedTask = (id) =>{
  //   let newState = this.state;
  //   // newState.list[id].isdone =true;
  //   newState.list[id].isdone = true
  //   this.setState(newState)
  //   // console.log(this.state)
  //   // this.setState({list:{isdone:true}})
  // }
   
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>To-Do App!</h1>
          <h2>Add new To-Do!</h2>
          <div className="input">
            <input
              className="insert"
              type="text"
              value={this.state.tempValue}
              onChange={this.setTask}
            />
            <button
              onClick={this.addToTasks}
              className="add-task"
              type="button"
            >
              Add
            </button>
          </div>
        </header>
        <main>
          <p>Let's get some work done!</p>
          <Item tasklist={this.state.list} />
          {/* <Item tasklist={this.state.list} isComplete={this.completedTask} /> */}
        </main>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="header">
//         <h1>To-Do App!</h1>
//         <h2>Add new To-Do!</h2>
//         <form>
//             <input className="insert" type="text" onChange={} placeholder="Enter new task"/>
//             <input className="add-task" type="button" value="Add"/>
//         </form>
//       </header>
//       <main>
//         <p>Let's get some work done!</p>
//         <Item/>
//       </main>
//     </div>
//   );
// }

// export default App;
