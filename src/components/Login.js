import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { authenticate } = useContext(AccountContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		authenticate(email, password)
			.then((data) => {
				console.log('Logged in!', data);
			})
			.catch((err) => {
				console.error('Failed to login', err);
			});
	};

	return (
		<div>
			<div>
				<h2>Log In ↓</h2>
			</div>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="email">Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)}></input>
				<label htmlFor="password">Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
