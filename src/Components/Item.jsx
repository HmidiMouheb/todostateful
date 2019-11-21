import React from "react";
import "./Item.css";

const Item = ({taskList,undoHandler,deleteHandler}) => {
    
  return (
    <div>
      {taskList.map((val, i) => (
        <div key={i} className="container">
          <div className="buttons-container">
            <button key={i} onClick={()=>undoHandler(i)}>{val.isDone ? "Undo" : "Complete"}</button>
            <button key={i} onClick={()=>deleteHandler(i)}>Delete</button>
          </div>
          <div>

          <p>{val.taskName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Item;
