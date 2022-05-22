import axios from 'axios';

const API_URL = 'http://api-prof-sdc.anonamis.ru/api/login_check';

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
    }

    return response.data;
};

// Login user
const login = async (userData) => {
    const response = {
        data: {
            email: 'john@doe.com',
            name: 'John',
        },
    };
    // await axios.post(API_URL, userData);
    console.log(response, 'response');
    if (response.data) {
        //    localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
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
