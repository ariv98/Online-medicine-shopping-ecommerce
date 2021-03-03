import { LOGIN, LOGOUT } from './actionTypes';

export const Login = (user) => {
    return {
        type: LOGIN,
        user
    }
}


export const Logout =  () => {
    return {
        type: LOGOUT,
       
    }
}