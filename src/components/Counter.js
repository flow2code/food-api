import React from 'react';

export default React.createClass({

	getInitialState: function() {
		return { counter: 0 };
	},

	componentWillMount: function() {
		this.intv = setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000);
	},

	componentWillUnmount: function() {
		clearInterval(this.intv);
	},

	render: function() {
		return <span className="wrap">Counter({this.state.counter})</span>;
	}

});
