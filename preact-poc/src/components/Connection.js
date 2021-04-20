import { h } from 'preact';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import "../stylesheets/Connection.css";

const Connection = () => {
    const [signIn, setSignIn] = useState(true);
    const [connected, setConnected] = useState(false);

    const updateSignIn = () => {
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
