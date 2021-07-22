import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';

export default () => {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const { getSession } = useContext(AccountContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		getSession().then(({ user }) => {
			user.changePassword(password, newPassword, (err, result) => {
				if (err) {
					console.error(err);
				} else {
					console.log(result);
				}
			});
		});
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler} >
				<label>Current password</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} />

				<label>New password</label>
				<input
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>

				<button type="submit">Change Password</button>
			</form>
		</div>
	);
};
