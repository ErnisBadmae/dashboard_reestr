import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = (props) => {
    //нужно через селектор достать списпок пунктов меню из редакса

    const routes = {
        ROLE_USER: ['/sds'],
        ROLE_DICTIONARY_EDITOR: ['/declaration'],
    };

    const { user } = useSelector((state) => state.auth);
    console.log(user, 'user');
    let allowedRoutes = [];

    console.log(user.roles, 'user roles', props.allowedRoles);

    user.roles.forEach((role) => {
        switch (role) {
            case 'ROLE_USER':
                props.allowedRoles.includes(role) &&
                    allowedRoutes.push(...routes.ROLE_USER);
                break;
            case 'ROLE_DICTIONARY_EDITOR':
                props.allowedRoles.includes(role) &&
                    allowedRoutes.push(...routes.ROLE_DICTIONARY_EDITOR);
                break;
            default:
                break;
        }
    });

    //     console.log(user, 'userFromREquerite');

    const isAuth = useAuth();
    const { pathname } = useLocation();
    console.log(
        `allowed routes: ${allowedRoutes}`,
        `pathname: ${pathname}`,
        `includes: ${allowedRoutes.includes(pathname)}`
    );

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return allowedRoutes.includes(pathname) ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace />
    );
};

export default RequireAuth;
