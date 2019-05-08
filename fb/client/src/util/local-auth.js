import axios from 'axios';

const localAPI  = {
    signup: data => {
        return axios.post('/_api/user/signup', data);
    },
    login: data => { // email, password
        return axios.post('/_api/user/login', data);
    },
    logout: () => {
        return axios.get('/_api/user/logout');
    },
    retrieveUser: () => {
        return axios.get('/_api/user');
    }
}

export default localAPI;