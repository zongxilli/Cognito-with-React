import React, { useEffect, useContext, useState } from 'react';
import { AccountContext } from './Account';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

export default () => {
	const { getSession } = useContext(AccountContext);

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		getSession().then(() => {
			setLoggedIn(true);
		});
	}, []);

	return (
		<div>
			{loggedIn && (
				<>
					<h2>Settings</h2>
					<div className="ui placeholder segment">
						<div className="ui two column very relaxed grid">
							<div className="column">
								<ChangePassword />
							</div>
							<div className="column">
								<ChangeEmail />
							</div>
						</div>
						<div className="ui vertical divider">Or</div>
					</div>
				</>
			)}
		</div>
	);
};
