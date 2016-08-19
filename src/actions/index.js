export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
	type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS
});

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE
});


export function login(username, password) {
	return dispatch => {
		dispatch(loginRequest());

		let form = new FormData();
		form.set('username', username);
		form.set('password', password);

		fetch('/api/v1/sessions', {
			method: 'POST',
			credentials: 'include',
			body: form
		})
			.then(resp => resp.json())
			.then(json => dispatch(loginSuccess()));
	};
}


export const REGISTER_FILL_PLACE =  'REGISTER_FILL_PLACE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_FINISH = 'REGISTER_FINISH';

export const registerFillPlace = () => ({
	type: REGISTER_FILL_PLACE
});

export const registerRequest = () => ({
	type: REGISTER_REQUEST
});

export const registerSuccess = () => ({
	type: REGISTER_SUCCESS
});

export const registerFailure = (error) => ({
	type: REGISTER_FAILURE,
	error
});

export const registerFinish = () => ({
	type: REGISTER_FINISH
});

export function register(formdata) {
	return dispatch => {
		dispatch(registerRequest());

		let userForm = new FormData();
		userForm.set('username', formdata.email);
		userForm.set('password', formdata.password);

		fetch('/api/v1/users', {
			method: 'POST',
			credentials: 'include',
			body: userForm
		})
			.then(resp => resp.json())
			.then(json => {
				console.log(json)
				dispatch(registerSuccess());
			});

		// add 
		// fetch('/api/v1/resources/places', {
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	body: form
		// })
		// 	.then(resp => resp.json())
		// 	.then(json => dispatch(loginSuccess()));
	};
}
