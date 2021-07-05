import React from "react";
import "./Todo.css"

const Todo = props => {
  let completed = props.todo.completed ? "completed" : "";
  return (
    <div
      className={`todo-${completed}` } todoItem
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
