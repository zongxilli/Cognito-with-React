import React, { useState, useEffect, useContext } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';
import { AccountContext } from './Account';

export default () => {
	// Check if this component need to be disabled
	const { getSession } = useContext(AccountContext);
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		getSession().then(() => {
			setLoggedIn(true);
		});
	}, []);
	// -----------------------------------------------

	const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const getUser = () => {
		return new CognitoUser({
			Username: email.toLowerCase(),
			Pool,
		});
	};

	const sendCode = (event) => {
		event.preventDefault();

		getUser().forgotPassword({
			onSuccess: (data) => {
				console.log('onSuccess:', data);
			},
			onFailure: (err) => {
				console.error('onFailure:', err);
			},
			inputVerificationCode: (data) => {
				console.log('Input code:', data);
				setStage(2);
			},
		});
	};

	const resetPassword = (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			console.error('Passwords are not the same');
			return;
		}

		getUser().confirmPassword(code, password, {
			onSuccess: (data) => {
				console.log('onSuccess:', data);
				window.location.reload(false);
			},
			onFailure: (err) => {
				console.error('onFailure:', err);
			},
		});

	};

	return (
		<div>
			{!loggedIn && (
				<div>
					<div>
						<h2>Forgot Password</h2>
					</div>
					{stage === 1 && (
						<form className="ui action input" onSubmit={sendCode}>
							<input
								placeholder="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<button className="ui animated fade button" type="submit">
								<div className="visible content">Send Verification Code</div>
								<div className="hidden content">
									<i className="paper plane icon"></i>
								</div>
							</button>
						</form>
					)}

					{stage === 2 && (
						<form className="ui action input" onSubmit={resetPassword}>
							<input
								placeholder="verification code"
								value={code}
								onChange={(event) => setCode(event.target.value)}
							/>
							<input
								placeholder="new password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
							<input
								placeholder="confirm password"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
							<button className="ui animated fade button" type="submit">
								<div className="visible content">Send Verification Code</div>
								<div className="hidden content">
									<i className="paper plane icon"></i>
								</div>
							</button>
						</form>
					)}
					<div className="ui divider"></div>
				</div>
			)}
		</div>
	);
};
