import {
    LOGIN,
    REGISTER,
    LOGOUT,
    REDIRECT,
    APP_LOAD
} from '../constants/actionTypes';

const defaultState = {
    appName: 'Лабораторная работа №4',
    token: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentUser: action.username || null
            };
        case REDIRECT:
            return { ...state, redirectTo: null };
        case LOGOUT:
            return { ...state, redirectTo: '/', token: null, currentUser: null };
        case LOGIN:
            return {
                ...state,
                redirectTo: action.error ? null : '/',
                currentUser: action.error ? null : action.username
            };
        case REGISTER:
            return {
                ...state,
                redirectTo: action.error ? null : '/login'
            };
        default:
            return state;
    }
};
