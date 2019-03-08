import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ""
    };
  }

  formSubmitHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
    event.target.reset();
  };

  inputChangeHandler = event => {
    this.setState({ todo: event.target.value });
  };

  toggleTodo = todoId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if(todo.id === todoId) {
            return {
              task: todo.task,
              id: todo.id,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed
        })
      }
    })
  }

  

  render() {
    return (
      <div>
        <h1>Todo List Day 1 MVP</h1>
        <TodoForm
          propsTaskField={this.inputChangeHandler}
          submitHandler={this.formSubmitHandler}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todoList={this.state.todos} 
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
