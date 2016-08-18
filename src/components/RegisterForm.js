import React from 'react';
import cx from 'classnames';



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
	<button type="submit" className="form-button">
		{props.text}
	</button>;



export default React.createClass({
	getInitialState: function() {
		this.inputs = {};
		return { step: 'start' };
	},

	next: function(e) {
		e.preventDefault();
		this.setState({ step: 'details' });
		
		setTimeout(() => this.inputs.email.focus(), 0);
	},

	register: function(e) {
		e.preventDefault();
		this.setState({ step: 'finish' });
	},

	render: function() {
		let setRef = name => ref => this.inputs[name] = ref;

		return (
			<div id="register">
				<div className="wrap" id="register-form">
					<FormStep title="Nagłówek zachęcający do zapisania" active={this.state.step == 'start'}>
						<form onSubmit={this.next}>
							<FormRow label="Nazwa restauracji" name="name" setRef={setRef} />
							<FormRow label="Adres" name="address" setRef={setRef} />
							<FormRow label="Miasto" name="city" setRef={setRef} />
							<FormButton text="Dalej" />
						</form>
					</FormStep>

					<FormStep title="Jeszcze parę szczegółów..." active={this.state.step == 'details'}>
						<form onSubmit={this.register}>
							<FormRow label="Adres e-mail" name="email" setRef={setRef} />
							<FormRow label="Hasło" name="password" setRef={setRef} />
							<FormRow label="Potwierdź hasło" name="confirm-password" setRef={setRef} />
							<FormButton text="Zapisz mnie" />
						</form>
					</FormStep>

					<FormStep title="Rejestracja pomyślna!" active={this.state.step == 'finish'}>
						<ul>
							{Object.keys(this.inputs).map((input, index) => 
								<li key={index}>{input + ": " + this.inputs[input].value}</li>
							)}
						</ul>
					</FormStep>
				</div>
			</div>
		);
	}
});
