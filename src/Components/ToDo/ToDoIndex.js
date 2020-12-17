import React from 'react';



class TodoList extends React.Component {
   
    constructor(props) {
        super(props) 
        this.state = {items: props.items}
    }
  render () {
      return (
        
          <ul>
              {this.state.items.map((item, index) => {
                  return (
                      <TodoListItem key={index} item={item} index={index} markTodoDone={this.props.markTodoDone} />
                  )
                })}
          </ul>
      )

  }

}
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoType = this.props.item.done ? <del>{this.props.item.value}</del> : <p>{this.props.item.value}</p>
    return(
      <li className="list-group-item">
        <div onClick={this.onClickDone}>
          {todoType}
        </div>
      </li>   
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <h1>Todo list</h1>;
  }
}
  
export default class ToDoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
   
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: [{index: 1, value: "Finish Challenges", done: false,},
                              {index: 2, value: "Annoy Levi", done: true}]};
  }
  addItem(todoItem) {
    this.state.todoItems.unshift({
      index: this.state.todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: this.state.todoItems});
  }

  markTodoDone(itemIndex) {
    var todo = this.state.todoItems[itemIndex];
    this.state.todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.state.todoItems.push(todo) : this.state.todoItems.unshift(todo);
    this.setState({todoItems: this.state.todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.state.todoItems} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
