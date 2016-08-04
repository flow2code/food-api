import React from 'react';
import { Link } from 'react-router';

export default (props) =>
	<div id="footer">
		<div className="wrap">
			<Link to="info">O nas</Link>
			<Link to="regulamin">Regulamin</Link>
			<Link to="kontakt">Kontakt</Link>
		</div>
	</div>;
