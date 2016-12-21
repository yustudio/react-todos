import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';

const todos = [
{
	task: 'make React tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

export default class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			todos: todos  //es6 is todos
		}
	}


	render() {
		return (
			<div>
				<h1>React to dos app!!</h1>
				<CreateTodo 
					todos = {this.state.todos}  /* passed in to validate input*/
					createTask={this.createTask.bind(this)}
				/>
				<TodosList 
					todos={this.state.todos}   // passed in iterate on each item
					toggleTask={this.toggleTask.bind(this)}    
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>   				
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos: this.state.todos}); 
	}

	createTask(task){
		// const newtodo = {  // or use redux's immutable pattern
		// 	this.state.todo,
		// 	{
		// 		task: task,
		// 		isCompleted: false
		// 	}
		// };
		console.log("DEBUG: createtask this.state "+JSON.stringify(this.state));
		this.state.todos.push({
			task: task,
			isCompleted: false
		});
		// this.setState triggers rerender of components
		//this.setState({todos: newtodo});

		this.setState({todos: this.state.todos});
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
		foundTodo.task = newTask;
		this.setState({todos: this.state.todos})
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({todos: this.state.todos})
	}
}