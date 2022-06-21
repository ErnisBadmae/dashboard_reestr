import { toast } from 'react-toastify';

export function info(message) {
    toast.info(message, {
        position: 'top-right',
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        marginTop: '200px',
    });
}

export function error(message) {
    toast.error(message, {
        position: 'top-right',
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        marginTop: '200px',
    });
}
