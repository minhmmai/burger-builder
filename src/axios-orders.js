import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-minh.firebaseio.com/'
})

export default instance;