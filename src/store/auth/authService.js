import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'https://api-prof-sdc.anonamis.ru/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// Register
const register = async (registrData) => {
    const responseRegisterUser = await axios.post(
        'https://api-prof-sdc.anonamis.ru/api/user/user_standard_certification/add_inclusion_request',
        registrData,
        headersAxios
    );
    console.log(responseRegisterUser, 'responseRegisterUser');
    // if (responseRegisterUser.data) {
    //     localStorage.setItem('token', JSON.stringify(response.data.token));
    // }

    return responseRegisterUser.data;

    // const responseRegisterUser = await axios('./responseRegister.json');

    //     if (responseRegisterUser) {
    //         localStorage.setItem(
    //             'user-reg',
    //             JSON.stringify(responseRegisterUser.data.data)
    //         );
    //     }
    // return responseRegisterUser.data.data;
};

// Login user
const login = async (userData) => {
    const responseLoginUser = await $api.post(
        '/login_check',
        userData,
        headersAxios
    );

    let token = responseLoginUser.data.token;
    let user = jwt_decode(token);

    console.log(user, 'user');
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
