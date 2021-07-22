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
			<form className="ui action input" onSubmit={onSubmitHandler}>
				<input
					placeholder="current password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input
					placeholder="new password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>

				<button className="ui animated button" type="submit">
					<div className="visible content">Change Password</div>
					<div class="hidden content">
						<i class="right arrow icon"></i>
					</div>
				</button>
			</form>
		</div>
	);
};
