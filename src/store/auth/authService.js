import axios from 'axios';
import $api from '../../http';
import jwt_decode from 'jwt-decode';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const register = async (registrData) => {
    const responseRegisterUser = await axios.post(
        'https://api-prof-sdc.anonamis.ru/api/user/user_standard_certification/add_inclusion_request',
        registrData,
        headersAxios
    );
    return responseRegisterUser.data;
};

const login = async (userData) => {
    const responseLoginUser = await $api.post(
        '/login_check',
        userData,
        headersAxios
    );
    if (responseLoginUser.data) {
        localStorage.setItem('token', responseLoginUser.data.token);
    }
    const value = jwt_decode(responseLoginUser.data.token);

    return value;
};

const logout = () => {
    localStorage.removeItem('token');
};

const authService = {
    register,
    logout,
    login,
};

export default authService;

export const authCheck = () => {
    //     try {
    const decodeToken = jwt_decode(localStorage.getItem('token'));
    console.log(decodeToken, 'decodeTokendecodeTokendecodeToken');
    //    const value = {
    //        user: decodeToken,
    //        token: localStorage.getItem('token'),
    //    };
    //         return value;
    //     } catch (err) {
    //         console.log(err);
    //     }
};
