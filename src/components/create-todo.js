import React from 'react';

export default class CreateTodo extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			error: null
		};
	}

	renderError() {
		if (!this.state.error) {return null;}

		return <div style={{color:'red'}}>{this.state.error}</div>
	}

	render() {
		return (			
			
			<form onSubmit = {this.handleCreate.bind(this)}>
				{/*use bind(this) so that this inside handleCreate is the 
				component's this and not <form>'s this'
				*/}
				<input type="text" placeholder="what do I need to do?"  
				ref="createInput"/>    {/*use ref to grab input box and add to todos arrary*/}
				<button>Create</button>
				{this.renderError()}
			</form>
	
		);
	}

	handleCreate(event) {
		event.preventDefault();  // prevent page to refresh when click on Create button
		//console.log(this.refs.createInput.value)
		//console.log(this.props.createTask)
	
		const task = this.refs.createInput.value;
		const validateInput = this.validateInput(task);

		if (validateInput) {
			this.setState({error: validateInput})
			return;
		}

		// this.props obtained from bind(this), which refers to component's this
		// this.refs refers to the html elements this
		this.setState({error: null})
		this.props.createTask(task);
		this.refs.createInput.value = '';

	}

	validateInput(task) {
		if (!task) {
			return 'Please enter a task';
		} else if (_.find(this.props.todos, todo => todo.task === task)){
			return 'Task already exists'
		} else {
			return null;
		}
	}

}