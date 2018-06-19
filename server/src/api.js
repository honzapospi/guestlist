let list = [
    {
        name: 'Honza',
        surname: 'Pospisil',
        id: '001'
    }
];

const fakeRequest = (data, err) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(err)
                reject(err);
            else {
                resolve(data);
            }
        }, 2000);
    });
}

const getGuestList = () => {
    return fakeRequest(list);
}

const addGuest = (name, surname, id) => {
    list.push({name, surname, id});
    return fakeRequest({'status': 'success'});
}

const deleteGuest = (id) => {
    list = list.filter(item => item.id !== id);
    return fakeRequest({'status': 'deleted'});
}

const updateGuest = (id, data) => {
    list = list.map(item => {
        if(item.id === id){
            return {...item, ...data}
        } else {
            return item;
        }
    });
}

const login = (username, password) => {
    if(username === 'honza' && password === 'heslo'){
        return fakeRequest({token: 'super_secret_token'});
    } else {
        const e = new Error();
        e.statusCode = 401;
        return fakeRequest(null, e);
    }
}

const authenticate = (token) => {
    if(token === 'super_secret_token'){
        return fakeRequest({id: 1});
    } else {
        const e = new Error();
        e.statusCode = 403;
        return fakeRequest(null, e);
    }
}

module.exports = {getGuestList, addGuest, deleteGuest, updateGuest, login, authenticate};