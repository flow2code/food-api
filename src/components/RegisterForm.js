import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { registerFillPlace, register, registerFinish } from '../actions';

const FormRow = props =>
	<div className="form-row">
		<label htmlFor={props.name}>{props.label}</label>
		<input type="text" id={props.name} ref={props.setRef(props.name)} />
	</div>;

const FormStep = props =>
	<div className={cx('step', 'slide', {active: props.active})}>
		<h2>{props.title}</h2>
		{props.children}
	</div>;

const FormButton = props =>
	<button type="submit" className="form-button" disabled={props.disabled}>
		{props.text}
	</button>;



const RegisterForm = React.createClass({
	componentWillMount: function() {
		this.inputs = {};
	},

	next: function(e) {
		e.preventDefault();
		this.props.dispatch(registerFillPlace());
		setTimeout(() => this.inputs.email.focus(), 0);
	},

	last: function(e) {
		e.preventDefault();

		let data = {};
		for (let name in this.inputs) {
			data[name] = this.inputs[name].value;
		}

		this.props.dispatch(register(data));
	},

	startOver: function(e) {
		e.preventDefault();
		this.props.dispatch(registerFinish());
	},

	setRef: function(name) {
		return ref => this.inputs[name] = ref;
	},

	render: function() {
		return (
			<div id="register">
				<div className="wrap" id="register-form">
					<FormStep title="Nagłówek zachęcający do zapisania" active={this.props.registerStep == 'start'}>
						<form onSubmit={this.next}>
							<FormRow label="Nazwa restauracji" name="name" setRef={this.setRef} />
							<FormRow label="Adres" name="address" setRef={this.setRef} />
							<FormRow label="Miasto" name="city" setRef={this.setRef} />
							<FormButton text="Dalej" />
						</form>
					</FormStep>

					<FormStep title="Jeszcze parę szczegółów..." active={this.props.registerStep == 'details'}>
						<form onSubmit={this.last}>
							<FormRow label="Adres e-mail" name="email" setRef={this.setRef} />
							<FormRow label="Hasło" name="password" setRef={this.setRef} />
							<FormRow label="Potwierdź hasło" name="confirm-password" setRef={this.setRef} />
							{
								this.props.loading ? 
									<FormButton text="Ładowanie" disabled="disabled" /> :
									<FormButton text="Zapisz się" />
							}
						</form>
					</FormStep>

					<FormStep title="Rejestracja pomyślna!" active={this.props.registerStep == 'finish'}>
						<ul>
							{this.inputs && Object.keys(this.inputs).map((input, index) => 
								<li key={index}>{input + ": " + this.inputs[input].value}</li>
							)}
							<a href="#" onClick={this.startOver}>Wróć</a>
						</ul>
					</FormStep>
				</div>
			</div>
		);
	}
});

export default connect(
	state => state.session
)(RegisterForm);
