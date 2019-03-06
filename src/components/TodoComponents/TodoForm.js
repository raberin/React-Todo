import React from 'react';

const TodoForm = (props) => {
    return (
        <form className="TodoForm" onSubmit={props.submitHandler}>
        <input type="text" name="InputField" onChange={props.propsTaskField} />
        <button type="submit"> Add Todo </button>
        <button  type="submit" name="ClearCompleted">Clear Completed</button>
        </form>
    )
}

export default TodoForm