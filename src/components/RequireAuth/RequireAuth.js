import { useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = (props) => {
    const { pathname } = useLocation();
    const { id } = useParams();

    const routes = {
        ROLE_USER: ['/sds', '/declaration'],
        ROLE_DICTIONARY_EDITOR: ['/declarations'],
        user_admin: [
            '/declarations',
            `/declaration/${id}`,
            '/requests-sdc-list',
            `/request_sdc/${id}`,
            `/edit-card/${id}`,
        ],
        user_sdc: [
            '/requests_sdc',
            `/request_sdc/${id}`,
            '/new-request-sdc',
            `/edit-card/${id}`,
            '/current-proposal',
            '/declaration',
            '/form-os-sdc',
            `/current-os/${id}`,
            `/edit-card-os/${id}`,
        ],
    };

    const { roles } = useSelector((state) => state.auth.user);

    let allowedRoutes = [];

    switch (roles) {
        case 'ROLE_USER':
            props.allowedRoles.includes(roles) &&
                allowedRoutes.push(...routes.ROLE_USER);
            break;
        case 'ROLE_DICTIONARY_EDITOR':
            props.allowedRoles.includes(roles) &&
                allowedRoutes.push(...routes.ROLE_DICTIONARY_EDITOR);
            break;
        case 'user_admin':
            props.allowedRoles.includes(roles) &&
                allowedRoutes.push(...routes.user_admin);
            break;
        case 'user_sdc':
            props.allowedRoles.includes(roles) &&
                allowedRoutes.push(...routes.user_sdc);
            break;
        default:
            break;
    }

    const isAuth = useAuth();

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
