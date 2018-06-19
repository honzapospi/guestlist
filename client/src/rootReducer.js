import {combineReducers} from 'redux';
import guestReducer from './guest/guestReducer';

export default combineReducers({
    guests: guestReducer
});