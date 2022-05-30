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
        const value = jwt_decode(responseLoginUser.data.token);
        const token = responseLoginUser.data.token;
        const user = {
            username: value.username,
            roles: value.roles,
        };
        localStorage.setItem('token', token);
        localStorage.setItem('user-info', JSON.stringify(user));
        return {
            token,
            user,
        };
    }
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user-info');
    // @todo: remove from store
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
