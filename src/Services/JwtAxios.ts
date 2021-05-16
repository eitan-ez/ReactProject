import { AuthState } from './../Redux/AuthState';
import axios from 'axios';
import store from '../Redux/Store';

const jwtAxios = axios.create();

jwtAxios.interceptors.request.use(request => {

    request.headers = {
        "authorization": "Bearer " + store.getState().AuthState.user?.token
    };

    return request;
});

export default jwtAxios;