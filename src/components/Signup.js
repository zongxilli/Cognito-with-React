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
				<h2>Sign Up</h2>
			</div>
			<form className="ui action input" onSubmit={onSubmitHandler}>
				<input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}></input>

				<input
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>

				<button className="ui primary button" type="submit">
					Signup
				</button>
			</form>
			<div class="ui divider"></div>
		</div>
	);
};

export default Signup;
