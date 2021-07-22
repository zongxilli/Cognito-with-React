import React, { useState, useContext } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { AccountContext } from './Account';

export default () => {
	const [newEmail, setNewEmail] = useState('');
	const [password, setPassword] = useState('');

	const { getSession, authenticate } = useContext(AccountContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		getSession().then(({ user, email }) => {
			authenticate(email, password).then(() => {
				const attributes = [
					new CognitoUserAttribute({ Name: 'email', Value: newEmail }),
				];

				user.updateAttributes(attributes, (err, results) => {
					if (err) {
						console.error(err);
					} else {
						console.log(results);
					}
				});
			});
		});
	};

	return (
		<div>
			<form className="ui action input" onSubmit={onSubmitHandler}>
				<input
					placeholder="current password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					placeholder="new email"
					value={newEmail}
					onChange={(e) => setNewEmail(e.target.value)}
				/>

				<button className="ui animated button" type="submit">
					<div className="visible content">Change Email</div>
					<div className="hidden content">
						<i className="right arrow icon"></i>
					</div>
				</button>
			</form>
		</div>
	);
};
