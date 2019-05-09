import axios from 'axios';

const localAPI  = {
  signup: data => {
    return axios.post('/_api/user/', data);
  },
  login: data => { // email, password
    console.log(data);
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