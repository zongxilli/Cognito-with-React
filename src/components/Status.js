import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

const Status = () => {
	const [status, setStatus] = useState(false);

	const { getSession, logout } = useContext(AccountContext);

	useEffect(() => {
		getSession().then((session) => {
			console.log('Session:', session);
			setStatus(true);
		});
	}, []);

	return (
		<div>
			{status && (
				<button className="ui right floated secondary button" onClick={logout}>
					Logout
				</button>
			)}
		</div>
	);
};

export default Status;
