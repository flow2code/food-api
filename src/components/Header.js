import React from 'react';
import { Link } from 'react-router';

const NoUser = (props) =>
	<div id="header-menu">
		<Link to="profile" className="header-link">Zaloguj</Link>
	</div>;

const User = (props) =>
	<div id="header-menu">
		<Link to="profile" className="header-link">Profil</Link>
		<Link to="profile" className="header-link">Wyloguj</Link>
	</div>;

export default (props) =>
	<div id="header">
		<div className="wrap">
			<span id="logo">
				<Link to="/">Lunch (?)</Link>
			</span>
			<User />
		</div>
	</div>;
