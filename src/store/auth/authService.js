import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://api-prof-sdc.anonamis.ru/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// Register
const register = async (registrData) => {
    const responseRegisterUser = await $api.post(
        '/user/user_standard_certification/addInclusionRequest',
        registrData
    );
    console.log(responseRegisterUser, 'responseRegisterUser');
    //     if (response.data) {
    //         localStorage.setItem('token', JSON.stringify(response.data.token));
    //     }

    return responseRegisterUser.data;
};

// Login user
const login = async (userData) => {
    const responseLoginUser =
        //     {
        //         data: {
        //             username: 'john@doe.com',
        //             //сайдбар от данных ролей
        //             roles: [
        //                 //  'ROLE_USER',
        //                 'ROLE_DICTIONARY_EDITOR',
        //                 //  'ROLE_DICTIONARY_REQUEST_STATUS_EDITOR',
        //                 //  'ROLE_DICTIONARY_ROLES_EDITOR',
        //                 //  'ROLE_USER_ROLES_EDITOR',
        //             ],
        //         },
        //     };
        await $api.post('/login_check', userData);
    let token = responseLoginUser.data.token;
    let user = jwt_decode(token);
    console.log(user, 'userdecodedtoken');

    if (responseLoginUser.data) {
        localStorage.setItem(
            'token',
            JSON.stringify(responseLoginUser.data.token)
        );
        localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
};

// Logout user
const logout = () => {
    localStorage.clear();
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
