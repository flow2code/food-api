import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import RegisterForm from './components/RegisterForm';
import Dummy from './components/pages/Dummy';
import ErrorPage from './components/pages/ErrorPage';
import AuthorizedOnly from './components/pages/AuthorizedOnly';

import './styles/main.css';

import { Provider } from 'react-redux';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={RegisterForm} />
			<Route path="info" component={AuthorizedOnly(Dummy)} />
			<Route path="profile" component={Dummy} />
			<Router path="*" component={ErrorPage} />
		</Route>
	</Router>,
	document.getElementById('app')
);
