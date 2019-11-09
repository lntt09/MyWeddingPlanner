import React, {Component} from 'react'
import ReactDOM from "react-dom"
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

const todoItems = [];
todoItems.push({index: 1, value: "print invitations", done: false});
todoItems.push({index: 2, value: "order flowers for bouquet", done: true});
todoItems.push({index: 3, value: "put deposit on venue", done: true});

class ToDoApp extends Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <ToDoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <ToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDoApp;