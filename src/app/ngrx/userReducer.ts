import { User, Action } from '../types';

const defaultUser: User = {
    name: 'Teo',
    email: 'teo@gmail.com',
    token: '123'
};

export function userReducer(state = null, action: Action): null | User {
    if (action.type === 'SET_USER') {
        return action.payload.user;
    }
    return state;
}
