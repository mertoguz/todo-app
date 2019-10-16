import React, { Component } from 'react';
import {TodoList} from './todo-list';
import {TodoForm} from './todo-form';

class App extends Component {

    constructor() {
        super();

        this.state = { thingsToDo : [
            { text: "Work hard", status: "todo" },
            { text: "Play hard", status: "todo" },
            { text: "Love more", status: "todo" }
        ]};

        this.setToDone = this.setToDone.bind(this);
        this.remove = this.remove.bind(this);
    }
  
    addToList = (todo) =>  {
        if(todo) {
            let tempList = this.state.thingsToDo;
            tempList.push({ text : todo, status: "todo" });
            this.setState({thingsToDo : tempList})
        }
    }

    setToDone (id) {
        id = id.replace("task","");
        let tempList = this.state.thingsToDo;

        tempList[id].status = "done";
        this.setState({thingsToDo : tempList});
    }

    remove (id) {
        id = id.replace("task","");
        let tempList = this.state.thingsToDo;

        if (id) {
            tempList.splice(id, 1);
            this.setState({thingsToDo : tempList});
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Simple and lovely to do App</h1>
                </div>
                <div className="jumbotron content">
                    <TodoForm addToList={this.addToList} />
                    <TodoList 
                        thingsToDo ={this.state.thingsToDo} 
                        setToDone={this.setToDone} 
                        remove={this.remove}
                    />
                </div>
            </div>
        );
    }
}

export default App;
