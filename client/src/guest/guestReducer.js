import {GUEST_ADD, GUESTLIST_SET} from './Guest.actions';

export default (state = {list: null}, action) => {
    if(action.type === GUEST_ADD){
        const newGuests = [...state.list, {id: action.id, name: action.name, surname: action.surname}];
        return {...state, list: newGuests};
    } else if(action.type === GUESTLIST_SET){
        return {...state, list: action.data}
    }
    return state;
}