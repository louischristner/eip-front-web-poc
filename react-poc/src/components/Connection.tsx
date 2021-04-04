import React from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { Redirect } from 'react-router-dom';
import "../stylesheets/Connection.css";

type State = {
    signIn: boolean;
    connected: boolean;
};

class Connection extends React.Component {
    state: State = {
        signIn: true,
        connected: false,
    };

    updateSignIn = (): void => {
        this.setState({
            signIn: !this.state.signIn,
        });
    };

    setConnected = (value: boolean): void => {
        this.setState({
            connected: value,
        });
    };

    render(): React.ReactElement {
        return (
            <div>
                {this.state.signIn
                    ? <SignIn updateSignIn={this.updateSignIn.bind(this)} setConnected={this.setConnected.bind(this)} />
                    : <SignUp updateSignIn={this.updateSignIn.bind(this)} setConnected={this.setConnected.bind(this)} />}
                {this.state.connected && <Redirect to='/dashboard' />}
            </div>
        );
    }
}

export default Connection;
