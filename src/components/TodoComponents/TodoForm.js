import React from "react";

const TodoForm = props => {
  return (
    <form className="todoForm" onSubmit={props.submitHandler}>
      <input className="todoTextField" type="text" placeholder="Add todo here" name="InputField" onChange={props.propsTaskField} />
      <div className="buttonsDiv">
        <button type="submit"> Add Todo </button>
        <button
          type="submit"
          name="ClearCompleted"
          onClick={props.clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
