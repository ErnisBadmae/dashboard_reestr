import { useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = (props) => {
    const { pathname } = useLocation();
    const { id, documentId } = useParams();

    const routes = {
        user_admin: [
            '/declarations',
            `/declaration/${id}`,
            '/requests-sdc-list',
            `/request_sdc/${id}`,
            `/edit-card/${id}`,
            `/current-os/${id}`,
            '/users',
            `/users/${id}`,
            `/current-expert-os/${id}`,
            `/request_sdc/${id}/current-document/${documentId}`,
            '/registration-sdc',
            `/current-request-sdc-reg/${id}`,
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
            `/holder/${id}`,
            `/request_sdc/${id}/current-document/${documentId}`,
            '/form-expert-os',
            `/current-expert-os/${id}`,
            `/edit-expert/${id}`,
        ],
    };

    const { roles } = useSelector((state) => state.auth.user);

    let allowedRoutes = [];

    props.allowedRoles.forEach((allowedRole) => {
        switch (allowedRole) {
            case 'user_admin':
                allowedRole === roles &&
                    allowedRoutes.push(...routes.user_admin);
                break;
            case 'user_sdc':
                allowedRole === roles && allowedRoutes.push(...routes.user_sdc);
                break;
            default:
                break;
        }
    });

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
