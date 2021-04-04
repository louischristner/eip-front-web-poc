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
            Account.register({
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
