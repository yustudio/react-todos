import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';


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
					createTask={this.createTask.bind(this)}
				/>
				<TodosList 
					todos={this.state.todos}    
				/>   {/*pass todos to TodosList*/}					
			</div>
		);
	}

	createTask(task){
		// const newtodo = {
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
}