import React from 'react';
import { InputField, InputButton } from '../Inputs';
import "../../stylesheets/App.css";

type Props = {
    updateSignIn: () => void;
};

type State = {
    email: string;
    password: string;
};

class SignIn extends React.Component<Props, State> {
    state: State = {
        email: '',
        password: '',
    };

    changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            email: e.target.value,
        });
    };

    changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            password: e.target.value,
        });
    };

    checkInputs = (): void => {
        if (!!this.state.email && !!this.state.password) {
            console.log('Possible');
        } else {
            console.log('Impossible');
        }
    };

    render(): React.ReactElement {
        return (
            <div className="App">
                <h1>Sign In</h1>
                <InputField type="email" value={this.state.email}
                    placeholder="Email" onChange={this.changeEmail} />
                <InputField type="password" value={this.state.password}
                    placeholder="Password" onChange={this.changePassword} />
                <InputButton text="Sign In" onClick={this.checkInputs} />
                <InputButton text="I don't have an account" onClick={this.props.updateSignIn} />
            </div>
        );
    }
}

export default SignIn;
