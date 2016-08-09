import React from 'react';
import cx from 'classnames';

import Counter from './Counter';

export default React.createClass({

	getInitialState: function() {
		this.inputs = {};
		return { step: 'start' };
	},

	next: function(ev) {
		ev.preventDefault();
		console.log(this.inputs);
		this.setState({ step: 'details' });
	},

	render: function() {
		let setRef = name => ref => this.inputs[name] = ref;

		return (
			<div id="register">
				<div className="wrap" id="register-form">

					<div className={cx('step', {active: this.state.step == 'start'})}>
						<h2>Nagłówek zachęcający do zapisania</h2>
						<form onSubmit={this.next}>
							<div className="form-row">
								<label htmlFor="name">Nazwa restauracji</label>
								<input type="text" id="name" ref={setRef('name')} />
							</div>
							<div className="form-row">
								<label htmlFor="address">Adres restauracji</label>
								<input type="text" id="address" ref={setRef('address')} />
							</div>
							<div className="form-row">
								<label htmlFor="city">Miasto</label>
								<input type="text" id="city" ref={setRef('city')} />
							</div>
							<button className="form-button" type="submit">Dalej</button>
						</form>
					</div>

					<div className={cx('step', 'slide', {active: this.state.step == 'details'})}>
						<h2>Jeszcze parę szczegółów</h2>
						<form>
							<div className="form-row">
								<label htmlFor="email">Adres e-mail</label>
								<input type="text" id="email" ref={setRef('email')} />
							</div>
							<div className="form-row">
								<label htmlFor="passwd">Hasło</label>
								<input type="text" id="passwd" ref={setRef('passwd')} />
							</div>
							<button className="form-button" onClick={ (ev) => {this.setState({step:'start'});ev.preventDefault() }}>Zapisz mnie</button>
						</form>
					</div>

				</div>
			</div>
		);
	}

});
