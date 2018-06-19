import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:8080'
});

export const getGuestlist = () => {
    return server.get('/guestlist');
}

