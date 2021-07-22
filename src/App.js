import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Account } from './components/Account';
import Status from './components/Status';

function App() {
	return (
		<div>
			<Account>
				<Status />
				<Signup />
				<Login />
			</Account>
		</div>
	);
}

export default App;
