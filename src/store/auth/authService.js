import axios from 'axios';
import $api from '../../http';
// import jwt_decode from 'jwt-decode';

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
    console.log(responseRegisterUser, 'responseRegisterUser');
    return responseRegisterUser.data;
};

const login = async (userData) => {
    const responseLoginUser = await $api.post(
        '/login_check',
        userData,
        headersAxios
    );

    if (responseLoginUser.data) {
        //    const value = jwt_decode(responseLoginUser.data.token);
        const token = responseLoginUser.data.token;

        localStorage.setItem('token', token);

        const responseCurrentUser = await $api.get(
            '/user/user_standard_certification/get/current_user'
        );
        const value = responseCurrentUser.data.data.user.user_role;

        const user = {
            username: value.description,
            roles: value.user_type,
        };

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
