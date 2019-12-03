const taskReducer = (
  state = {
    todos: [
      { taskName: "Task1", isDone: false },
      { taskName: "Task2", isDone: false }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          { taskName: action.payload, isDone: false, wannaEdit: false }
        ]
      };
    case "DELETE_TASK":
      return {
        todos: state.todos.filter((el, i) => i !== action.payload)
      };
    case "TASK_COMPLETED":
      let newTask = state.todos;
      newTask[action.index].isDone = true;
      return { todos: newTask };
    case "EDIT_TASK":
      let newTab = state.todos;
      newTab[action.payload].wannaEdit = true;
      return { todos: newTab };
    case "UPDATE_TASK":
      let newTabUpdated = state.todos;
      newTabUpdated[action.payload].taskName = action.name;
      newTabUpdated[action.payload].wannaEdit = false;
      return { todos: newTabUpdated };
    default:
      return state;
  }
};

export default taskReducer;

// const taskReducer = (state = ["Task1", "Task2"], action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return [...state,action.payload];
//       case "DELETE_TASK":
//         return
//     default:
//       return state;
//   }
// };

// export default taskReducer;
