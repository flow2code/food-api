import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import RegisterForm from './components/RegisterForm';
import Profile from './components/pages/Profile';
import ErrorPage from './components/pages/ErrorPage';
import AuthorizedOnly from './components/pages/AuthorizedOnly';

import './styles/main.css';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={RegisterForm} />
		<Route path="profile" component={Profile} />
		<Router path="*" component={ErrorPage} />
	</Route>
);

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}
