import axios from 'axios';

// let apiUrl;

const apiUrls = {
  production: '',
  development: 'http://apollo:3019'
}

// if (window.location.hostname === 'apollo' || window.location.hostname === '192.168.4.21') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

const api = axios.create({ baseURL: apiUrls.development });

// console.log(api.get('/ntt'))
export default api;