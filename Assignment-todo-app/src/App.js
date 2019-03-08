import React, { Component } from 'react';
import Todo from './todo';
import Addtodo from './Addtodo';

class App extends Component {
    state = {
      todos:[
        {id:1, item:'Play games'},
        { id:2, item:'watch movies'}
      ]
    }
    deleteTodo=(id)=>{
      let todos = this.state.todos.filter(todos=>{
        return todos.id !== id
      })
      this.setState({
        todos
      })
    }
    add=(info)=>{
      info.id = Math.random();
      let todos = [...this.state.todos,info];
      this.setState({
        todos
      })
    }
    render(){
      return (
        <div className="App container">
        <h1 className='center purple-text'>My Todo's</h1>
        <Todo todos = {this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo add = { this.add }/>
        </div>
      );
    }
}
export default App;
