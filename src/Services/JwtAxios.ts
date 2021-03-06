import axios from 'axios';
import store from '../Redux/Store';

const jwtAxios = axios.create();

jwtAxios.interceptors.request.use(request => {

    request.headers = {
        "jwt": store.getState().authState.user?.token
    };

    return request;
});

export default jwtAxios;