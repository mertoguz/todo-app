import React from 'react';

export class TodoList extends React.Component {

	constructor () {
		super();
		this.setToDone = this.setToDone.bind(this);
		this.remove = this.remove.bind(this);
	}

	setToDone (e) {
		this.props.setToDone(e.target.parentNode.id);
	}

	remove (e) {
		this.props.remove(e.target.parentNode.id);
	}

	render () {
		const items = this.props.thingsToDo.map((el, i) => {
			let taskId = "task" + i;
			return (
				<li key={i} id={taskId} className="list-group-item todo-item">
					<div className="todo-task">
						<span className="id">{i+1}. </span>
						<span className="title">{el.text}</span>
						<span className={`todo-${el.status} ml-2`}><i className="fas fa-check"/></span>
					</div>
					<div className="todo-buttons" id={taskId}>
						<button type="button" 
						className="btn btn-outline-success ml-2 btn-todo" 
						onClick={this.setToDone}>
							<i className="fas fa-check"/>
						</button>
						<button 
						type="button" 
						className="btn btn-outline-danger ml-2 btn-todo" 
						onClick={this.remove}>
							<i className="fas fa-trash"/>
						</button>
					</div>
				</li>
			)
		});
		return (
				<div>
					<ul className="todo-list list-group list-group-flush">
						{items}
					</ul>
				</div>
		)
	}
}