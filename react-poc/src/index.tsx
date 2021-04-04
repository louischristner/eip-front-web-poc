import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Dashboard from './components/Dashboard';
import Connection from './components/Connection';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} render={() => <Connection />} />
            <Route path='/dashboard' exact={true} render={() => <Dashboard />} />
            <Route component={() => <h1>404 Not Found!</h1>} />
        </Switch>
    </BrowserRouter>,
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
