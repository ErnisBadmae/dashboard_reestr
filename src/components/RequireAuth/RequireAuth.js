import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
    //нужно через селектор достать списпок пунктов меню из редакса
    const allowedRoutes = ['/admin'];

    const isAuth = useAuth();
    const { pathname } = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return allowedRoutes.includes(pathname) ? (
        <Outlet />
    ) : (
        <Navigate to="/admin" replace />
    );
};

export default RequireAuth;
