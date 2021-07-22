import React, { useState } from 'react';
import UserPool from '../UserPool';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = (event) => {
		event.preventDefault();

		UserPool.signUp(email, password, [], null, (err, data) => {
			if (err) {
				console.error(err);
			}
			console.log(data);
		});
	};

	return (
		<div>
			<div>
				<h1>Sign Up ↓</h1>
			</div>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="email">Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)}></input>
				<label htmlFor="password">Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>

				<button type="submit">Signup</button>
			</form>
		</div>
	);
};

export default Signup;
