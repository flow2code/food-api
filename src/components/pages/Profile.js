import React from 'react';

const Place  = (props) =>
	<div className="profile-place">
		{props.name}
	</div>;

export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			places: [
				{name: 'a', id:1},
				{name: 'b', id:2},
				{name: 'c', id:3}
			]
		};
	}

	render() {
		return (
			<div>
				<header id="profile-header">
					<div className="wrap">
						<h1>Profil użytkownika</h1>
						<h2>Twoje miejsca</h2>
					</div>
				</header>
				<div id="profile-places">
					<div className="wrap clear">
						{this.state.places.map(place => <Place key={place.id} {...place} />)}
					</div>
				</div>
			</div>
		);
	}
}
