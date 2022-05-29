import axios from 'axios';
import $api from '../../http';
import jwt_decode from 'jwt-decode';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

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
    if (responseLoginUser.data) {
        localStorage.setItem(
            'token',
            JSON.stringify(responseLoginUser.data.token)
        );
    }
    const value = jwt_decode(responseLoginUser.data.token);

    return value;
};

// Logout user
const logout = () => {
    localStorage.removeItem('token');
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
