import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		}
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;
		console.log("TodosListItem props: " + JSON.stringify(this.props))

		const taskStyle = {
			color: isCompleted ? 'green' : 'red',
			cursor:'pointer'  // make it clickable

		}

		if (this.state.isEditing) {
			return (
				<td>
					<form> {/*onSubmit={this.onSaveClick.bind(this)}>*/}
							{/*can have value and onChange; but for now just use defaultValue here*/}
							{/*add ref so we can get the value of the input*/}
							<input type="text" defaultValue={task} ref="editInput"/>
					</form>
				</td>
				);
		}

		return(
			 <td style={taskStyle}
			 	 onClick={this.props.toggleTask.bind(this, task)}
			 >
			{/*use bind(this) not because we want to use the this context in toggleTask
			but because we want to use the task passed in from app.js. this was
			set from app.js when passed into todos-list and can't be changed*/}
			 	{task}
			 </td>
			);
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		} 

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.props.deleteTask.bind(this, this.props.task
					)}>Delete</button>
			</td>
		)
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}

	onSaveClick(event) {
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;

		this.props.saveTask(oldTask, newTask);
		this.setState({isEditing: false})
	}

	render() {
		return (			
			
					<tr>
						{this.renderTaskSection()}
						{this.renderActionSection()}  
						{/*or this.renderActionSection.bind(this) but this 
							is necessary only for onclick's use of setstate
						*/}
					</tr>
	
		);
	}
}