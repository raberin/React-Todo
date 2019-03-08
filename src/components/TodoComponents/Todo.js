import React from "react";

const Todo = props => {
  let completed = props.todo.completed ? "completed" : "";
  return (
    <div
      key={props.todo.id}
      onClick={event => {
        props.toggleTodo(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
