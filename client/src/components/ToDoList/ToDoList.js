import React, {Component} from 'react'
import ToDoListItem from './ToDoListItem'
import './ToDoList.css'


class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return{
                    items: prevState.items.concat(newItem)
                }
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    render(){
        return(
           <div className="todoListMain">
            <div className="header">
                <h1 className='todo_title'>Things To Complete</h1>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement =a} placeholder="Enter A Task" />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <ToDoListItem entries={this.state.items} delete={this.deleteItem}/>
        </div> 
        )
    }
}

export default ToDoList;