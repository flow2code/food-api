import React from 'react';

import Counter from './Counter';

export default React.createClass({

	render: function() {
		return (
			<div id="register">
				<div className="wrap" id="register-form">
					<h2>Nagłówek zachęcający do zapisania</h2>
					<form>
						<div>
							<label htmlFor="name">Nazwa restauracji</label>
							<input type="text" id="name" />
						</div>
						<div>
							<label htmlFor="addres">Adres restauracji</label>
							<input type="text" id="address" />
						</div>
						<div>
							<label htmlFor="email">Adres e-mail</label>
							<input type="text" id="email" />
						</div>
						<button className="form-button" type="submit">Zapisz mnie</button>
					</form>
				</div>
			</div>
		);
	}

});
