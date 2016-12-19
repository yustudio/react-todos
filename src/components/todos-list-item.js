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

		return(
			 <td style={taskStyle}
			 	 onClick={this.props.toggleTask.bind(this, task)}
			 >
			{/*use bind(this) not because we want to use the this context in toggleTask
			but because we want to use the task pqssed in from app.js*/}
			 	{task}
			 </td>
			);
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		} 

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button>Delete</button>
			</td>
		)
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
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