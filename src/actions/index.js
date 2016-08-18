export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export function loginRequest() {
	return {
		type: LOGIN_REQUEST
	};
}

export function loginSuccess() {
	return {
		type: LOGIN_SUCCESS
	};
}

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error
	};
}


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
