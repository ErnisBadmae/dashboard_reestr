import jwt_decode from 'jwt-decode';

let token = JSON.parse(localStorage.getItem('token'));

let decoded = jwt_decode(token);

console.log(decoded, 'decodedTOKEN');
