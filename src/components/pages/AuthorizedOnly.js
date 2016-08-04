import React from 'react';
import { browserHistory } from 'react-router';

import ErrorPage from './ErrorPage';

export default (WrappedComponent) => React.createClass({

	componentWillMount: function() {
		this.authorized = true;
	},

	render: function() {
		if (this.authorized)
			return <WrappedComponent />;
		else
			return <ErrorPage />;
	}

});
