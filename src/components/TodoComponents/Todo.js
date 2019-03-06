import React from 'react';

const Todo = (props) => {
    return (
        <ul>
            <li>{props.propsTodo.task}</li>
        </ul>
    )
}

export default Todo;