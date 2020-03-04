import React, { Component } from 'react';

const Card = ({firstName, lastName, age, hairColor}) => (
	<div>
		<h1>{firstName}, {lastName}</h1>
		<p>Age: {age}</p>
		<p>Hair Color: {hairColor}</p>
	</div>
);

const Button = (props) => {
	return (
		<button onClick={props.incrementBirthday}>Birthday Button for {props.firstName} {props.lastName}</button>
	);
}

class PersonCard extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    incrementBirthday = () => {
    	this.setState({
    		age: this.state.age + 1
    	})
    }
	render() {
		return (
			<div>
				<Card firstName={this.props.firstName} lastName={this.props.lastName} age={this.state.age} hairColor={this.props.hairColor} />
				<Button incrementBirthday={this.incrementBirthday} firstName={this.props.firstName} lastName={this.props.lastName}/>
			</div>
		);
	}
}

export default PersonCard;