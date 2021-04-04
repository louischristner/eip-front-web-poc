import React from 'react';
import Account from '../../services/Account';
import { InputField, InputButton } from '../Inputs';
import "../../stylesheets/Connection.css";

type Props = {
    updateSignIn: () => void;
    setConnected: (value: boolean) => void;
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
            Account.login({
                email: this.state.email,
                password: this.state.password,
            }).then(res => {
                console.log(res);
                this.props.setConnected(true);
            }).catch(err => {
                console.error(err);
                this.setState({
                    email: '',
                    password: '',
                }, () => {
                    this.props.setConnected(false);
                });
            });
        } else {
            console.log('Impossible');
            this.props.setConnected(false);
        }
    };

    render(): React.ReactElement {
        return (
            <div className="Connection">
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
