// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createStore, combineReducers } from "redux";

// // Creating the reducer
// const userReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "UPDATE_USER":
//       return payload;
//     default:
//       return state;
//   }
// };

// const productsReducer = (state = [], action) => {
//   return state;
// };

// //Combining reducers
// const rootReducer = combineReducers({
//   user: userReducer,
//   products: productsReducer
// });

// //Creating an initial State
// const initialState = {
//   user: "Mostfa",
//   products: ["phone", "sbadri", "klasset"]
// };

// //Creating a Store
// const store = createStore(
//   rootReducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// console.log("TCL: store", store.getState());

// const updateUserAction = {
//   type: "UPDATE_USER",
//   payload: "Mouldi"
// };

// store.dispatch(updateUserAction);
// console.log("TCL: store", store.getState());

// ReactDOM.render(<App />, document.getElementById("root"));

// ///*****Redux Dev Tools Link */
// // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
