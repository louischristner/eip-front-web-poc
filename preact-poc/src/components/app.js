import { h } from 'preact';
import { Router } from 'preact-router';
import '../stylesheets/index.css';
import Connection from './Connection';
import Dashboard from './Dashboard';

const NotFound = () => {
	return (
		<h1>404 Not Found!</h1>
	);
}

const App = () => (
	<div id="app">
		<Router>
			<Connection path='/' />
			<Dashboard path='/dashboard' />
			<NotFound default />
		</Router>
	</div>
)

export default App;
