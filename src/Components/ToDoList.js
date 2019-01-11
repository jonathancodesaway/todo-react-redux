import {connect} from "react-redux";
import {onAdd, onRemove} from "../Actions";
import React from "react";

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdding: false
		}	
		this.toggle = this.toggle.bind(this);
		console.log(this.state.isAdding);
	}
	
	toggle(){
		this.setState({
			isAdding: !this.state.isAdding
		})
	}

	test(){
		return false;
	}

	render(){
		return(
			<div>
				<button id="add" onClick={this.toggle}>Add New</button>
				<button id="remove">Remove</button>

				{this.state.isAdding? <Input onAdd={this.props.onAdd} onToggle={this.toggle}/> : this.test}
				//display todolist

			</div>
		);
	}
}

class Input extends React.Component {


	addToList = (event) =>{
		console.log(event);
		this.props.onToggle();
		this.props.onAdd(event.target.value);
		event.preventDefault();
	}
	render(){

		return (
			<form id="insert" onsubmit={this.addToList}>
				<input id="title" placeholder="Enter Title"/>
				<textarea id="summary" placeholder="Enter summary"/>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}

export default ToDoList;