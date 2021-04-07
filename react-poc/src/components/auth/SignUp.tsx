import React, { useState } from 'react';
import Account from '../../services/Account';
import { InputField, InputButton } from '../Inputs';
import AuthProps from './AuthProps';
import "../../stylesheets/Connection.css";

const SignUp: React.FC<AuthProps> = ({ updateSignIn, setConnected }: AuthProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const changeConfPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setConfPassword(e.target.value);
    };

    const checkInputs = (): void => {
        if (!!email && !!password && password === confPassword) {
            Account.register({
                email: email,
                password: password,
            }).then(res => {
                console.log(res);
                setConnected(true);
            }).catch(err => {
                console.error(err);
                setEmail('');
                setPassword('');
                setConfPassword('');
                setConnected(false);
            });
        } else {
            console.log('Impossible');
            setConnected(false);
        }
    };

    return (
        <div className="Connection">
            <h1>Sign Up</h1>
            <InputField type="email" value={email}
                placeholder="Email" onChange={changeEmail} />
            <InputField type="password" value={password}
                placeholder="Password" onChange={changePassword} />
            <InputField type="password" value={confPassword}
                placeholder="Confirm password" onChange={changeConfPassword} />
            <InputButton text="Sign Up" onClick={checkInputs} />
            <InputButton text="I already have an account" onClick={updateSignIn} />
        </div>
    );
};

export default SignUp;
