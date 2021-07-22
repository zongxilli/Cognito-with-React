import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from './Account';

const Login = () => {
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

	const { authenticate } = useContext(AccountContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		authenticate(email, password)
			.then((data) => {
				console.log('Logged in!', data);
				window.location.reload(false);
			})
			.catch((err) => {
				console.error('Failed to login', err);
			});
	};

	return (
		<div>
			{!loggedIn && (
				<div>
					<div>
						<h2>Log In</h2>
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
							Login
						</button>
					</form>
					<div className="ui divider"></div>
				</div>
			)}
		</div>
	);
};

export default Login;
