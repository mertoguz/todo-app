import React from 'react';

export class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.addToList = this.addToList.bind(this);
  }
    
  addToList (e) {
    e.preventDefault();
    const input = document.getElementById('add-todo');
    this.props.addToList(input.value);
    input.value = '';
  }

  render () {
    return (
        <div className="todo-form">
            <form className="form-inline" onSubmit={this.addToList} >
                <div className="add-todo">
                <input id="add-todo" type="text" autoComplete="off" className="form-control" placeholder="What else to do.."/>
                <button className="btn btn-outline-primary ml-2" type="button" onClick={this.addToList}>Add to list</button>
                </div>
            </form>
        </div>
    )
  }
}