import axios from 'axios';

const devBaseURL = 'http://localhost:8888/';
//const prodBaseURL = 'tbd';

let baseURL = devBaseURL;


const jwtAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default jwtAxios;
