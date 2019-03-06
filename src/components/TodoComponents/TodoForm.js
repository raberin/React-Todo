import React from 'react';

const TodoForm = (props) => {
    return (
        <form className="TodoForm">
        <input type="text" name="InputField" />
        <input type="submit" name="AddTodo" value="Add Todo" />
        <input  type="submit" name="ClearCompleted" value="Clear Completed" />
        </form>
    )
}

export default TodoForm