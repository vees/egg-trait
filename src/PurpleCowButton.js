import React from 'react';
import countapi from 'countapi-js';

class PurpleCowButton extends React.Component {

	constructor(props)
	{
		super(props)
		this.state = {
			countapiKey: this.props.countapiKey,
			clickCount: "Click to see count"
		};
	}

	updateClickCount = () =>
	{
	  countapi.visits(this.state.countapiKey).then((result) => {
	    this.setState({clickCount: result.value})
	  });
	}

	render() {
		return <button onClick={this.updateClickCount}>{this.state.clickCount}</button>;
	}
}

export default PurpleCowButton;