import axios from 'axios';

export default axios.create({
    // baseURL:'https://cf4b-75-22-141-193.ngrok-free.app',
    baseURL:'https://c24a-76-191-29-33.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});