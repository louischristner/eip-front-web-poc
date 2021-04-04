import axios from 'axios';

export default axios.create({
    baseURL: 'https://285e3a1b3959.ngrok.io/',
    headers: {
        'Content-type': 'application/json',
    }
});
