import React from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import "../stylesheets/App.css";

type State = {
    signIn: boolean;
};

class App extends React.Component {
    state: State = {
        signIn: true,
    };

    updateSignIn = (): void => {
        this.setState({
            signIn: !this.state.signIn
        });
    };

    render(): React.ReactElement {
        return (
            this.state.signIn
                ? <SignIn updateSignIn={this.updateSignIn.bind(this)} />
                : <SignUp updateSignIn={this.updateSignIn.bind(this)} />
        );
    }
}

export default App;
