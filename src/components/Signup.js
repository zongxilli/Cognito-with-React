import React, { useState, useEffect, useContext } from 'react';
import UserPool from '../UserPool';
import { AccountContext } from './Account';

const Signup = () => {
	// Check if this component need to be disabled
	const { getSession } = useContext(AccountContext);
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		getSession().then(() => {
			setLoggedIn(true);
		});
	}, []);
	// -----------------------------------------------

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
			{!loggedIn && (
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
					<div className="ui divider"></div>
				</div>
			)}
		</div>
	);
};

export default Signup;
