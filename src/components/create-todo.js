import React from 'react';

export default class CreateTodo extends React.Component {
	

	render() {
		return (			
			

			<form onSubmit = {this.handleCreate.bind(this)}>
				{/*use bind(this) so that this inside handleCreate is the 
				component's this and not <form>'s this'
				*/}
				<input type="text" placeholder="what do I need to do?"  
				ref="createInput"/>    {/*use ref to grab input box and add to todos arrary*/}
				<button>Create</button>
			</form>
	
		);
	}

	handleCreate(event) {
		event.preventDefault();  // prevent page to refresh when click on Create button
		//console.log(this.refs.createInput.value)
		//console.log(this.props.createTask)
	
		// this.props obtained from bind(this), which refers to component's this
		// this.refs refers to the html elements this
		this.props.createTask(this.refs.createInput.value);

	}

}