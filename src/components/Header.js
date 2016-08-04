import React from 'react';
import { Link } from 'react-router';

export default (props) =>
	<div id="header">
		<div className="wrap">
			<span id="logo">
				<Link to="/">Lunch (?)</Link>
			</span>
			<div id="header-menu">
				<Link to="profile" className="header-link">Zaloguj</Link>
			</div>
		</div>
	</div>;
