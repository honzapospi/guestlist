// @flow
import {getGuestlist} from "../api";

export const GUEST_ADD = 'GUEST_ADD';
export const GUESTLIST_FETCH_START = 'GUESTLIST_FETCH_START';
export const GUESTLIST_FETCH_ERROR = 'GUESTLIST_FETCH_ERROR';
export const GUESTLIST_SET = 'GUESTLIST_SET';
export const GUESTLIST_GET = 'GUESTLIST_GET';


export const actionAddGuest = (id: string, name: string, surname: string) => {
    return {
        type: GUEST_ADD,
        id: id,
        name: name,
        surname: surname
    }
}

export const actionGuestListFetchStart = () => {
    return {
        type: GUESTLIST_FETCH_START
    }
}

export const actionGuestListFetchDone = (data) => {
    return {
        type: GUESTLIST_SET,
        data: data
    }
}

export const actionGuestListFetchError = (e) => {
    return {
        type: GUESTLIST_FETCH_ERROR,
        error: e
    }
}

export const actionGuestListGet = () => {
    return dispatch => {
        dispatch(actionGuestListFetchStart());
        getGuestlist().then(result => {
            dispatch(actionGuestListFetchDone(result.data));
        }).catch(e => {
            dispatch(actionGuestListFetchError(e));
        })
    }
}
