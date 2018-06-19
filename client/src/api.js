// @flow
import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:8080'
});

export const getGuestlist = () => {
    return server.get('/guestlist');
}

export const addGuest = (id: string, name: string, surname: string) => {
    return server.post('/guestlist', {id, name, surname});
}

