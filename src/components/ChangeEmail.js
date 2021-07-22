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
			<form onSubmit={onSubmitHandler}>
				<label>New Email</label>
				<input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

				<label>Current password</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} />

				<button type="submit">Change Email</button>
			</form>
		</div>
	);
};
