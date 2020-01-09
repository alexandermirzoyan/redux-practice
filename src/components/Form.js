import React from 'react';
import { connect } from 'react-redux';
import addArticle from '../redux/actions/actions'

function mapDispatchToProps(dispatch) {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
}

class ReduxForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
		}
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const { title } = this.state;
		this.props.addArticle({ title });
		this.setState({ title: "" });
	}

	render() {
		const { title } = this.state;

		return (
			<form onSubmit={this.handleSubmit.bind(this)} >
				<div>
					<label htmlFor="title" >Title</label>
					<input 
						type="text"
						id="title"
						value={title}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<button type="submit" >SAVE</button>
			</form>
		)
	}
}

const Form = connect(
	null,
	mapDispatchToProps
)(ReduxForm)

export default Form;