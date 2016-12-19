import React from 'react';
import _ from 'lodash';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component {


	renderItems() {
			// don't want to pass in todos to TodosListItem below(with ...this.props) so omit it
			const props = _.omit(this.props, 'todos');

			return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
			} {...todo} {...props}/>);   
			// when iterate through something in react, need a key. since there is no key 
			// in todos data, use index as key
			// ..todo is same as task={todos.task} isCompleted={todo.isCompleted}
		}


	render() {
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}