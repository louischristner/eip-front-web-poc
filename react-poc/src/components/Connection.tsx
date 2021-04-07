import React, { useState } from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { Redirect } from 'react-router-dom';
import "../stylesheets/Connection.css";

const Connection: React.FC = () => {
    const [signIn, setSignIn] = useState(true);
    const [connected, setConnected] = useState(false);

    const updateSignIn = (): void => {
        setSignIn(!signIn);
    };

    return (
        <div>
            {signIn
                ? <SignIn updateSignIn={updateSignIn} setConnected={setConnected} />
                : <SignUp updateSignIn={updateSignIn} setConnected={setConnected} />}
            {connected && <Redirect to='/dashboard' />}
        </div>
    );
};

export default Connection;
