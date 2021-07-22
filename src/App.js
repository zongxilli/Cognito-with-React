import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Account } from './components/Account';
import Status from './components/Status';
import Settings from './components/Settings';
import ForgotPassword from './components/ForgotPassword';

function App() {
	return (
		<div>
			<Account>
				<Status />
				<Signup />
				<Login />
				<ForgotPassword />
				<Settings />
			</Account>
		</div>
	);
}

export default App;
