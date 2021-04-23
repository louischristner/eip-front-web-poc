import { h } from 'preact';
import { Router } from 'preact-router';
import Connection from './components/Connection';
import Dashboard from './components/Dashboard';
import './stylesheets/index';

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
