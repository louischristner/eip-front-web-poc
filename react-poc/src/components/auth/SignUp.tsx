import React from 'react';
import { InputField, InputButton } from '../Inputs';
import "../../stylesheets/App.css";

type Props = {
    updateSignIn: () => void;
};

type State = {
    email: string;
    password: string;
    confPassword: string;
};

class SignUp extends React.Component<Props, State> {
    state: State = {
        email: '',
        password: '',
        confPassword: '',
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

    changeConfPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            confPassword: e.target.value,
        });
    };

    checkInputs = (): void => {
        if (!!this.state.email && !!this.state.password && this.state.password === this.state.confPassword) {
            console.log('Possible');
        } else {
            console.log('Impossible');
        }
    };

    render(): React.ReactElement {
        return (
            <div className="App">
                <h1>Sign Up</h1>
                <InputField type="email" value={this.state.email}
                    placeholder="Email" onChange={this.changeEmail} />
                <InputField type="password" value={this.state.password}
                    placeholder="Password" onChange={this.changePassword} />
                <InputField type="password" value={this.state.confPassword}
                    placeholder="Confirm password" onChange={this.changeConfPassword} />
                <InputButton text="Sign Up" onClick={this.checkInputs} />
                <InputButton text="I already have an account" onClick={this.props.updateSignIn} />
            </div>
        );
    }
}

export default SignUp;
