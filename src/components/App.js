import React from 'react';

import Header from './Header';
import Footer from './Footer';
import RegisterForm from './RegisterForm';

export default (props) =>
	<div>
		<Header />
		{props.children}
		<Footer />
	</div>;
