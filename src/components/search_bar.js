import React, {Component} from 'react';
//Means import React AND grab React.Component and give it the name Component so I can use it in here

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
			)
	}

	//Name your event handler with the convention: handleElementAction
	//Event handlers are always called with an Event Object, it describes info about the event that occurred
	//ES6 allows to do this all in one line without creating a separate method for the event handler

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

//extend gives the class all the functionality of React.Component
//render is the same as it would be in a functional component

export default SearchBar;