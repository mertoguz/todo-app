import React from 'react';

export class TodoForm extends React.Component {
  
    constructor() {
        super();

        this.state = {
            todo: '',
        }

        this.addToList = this.addToList.bind(this);
        this.inputChanged = this.inputChanged.bind(this);

        
    }
        
    addToList (e) {
        e.preventDefault();

        this.props.addToList(this.state.todo);
        this.setState({todo: ''});
    }

    inputChanged (e) {
        this.setState({todo: e.target.value});
    }

    render () {
        return (
            <div className="todo-form">
                <form className="form-inline">
                    <div className="add-todo">
                        <input
                            id="add-todo"
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            placeholder="What else to do.."
                            value={this.state.todo}
                            onChange={this.inputChanged}
                        />
                        <button className="btn btn-outline-primary" type="button" onClick={this.addToList}>Add to list</button>
                    </div>
                </form>
            </div>
        )
    }
}