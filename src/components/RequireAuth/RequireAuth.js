import { useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = (props) => {
    const { pathname } = useLocation();
    const { id } = useParams();

    const routes = {
        ROLE_USER: ['/sds', '/declaration'],
        ROLE_DICTIONARY_EDITOR: ['/declarations'],
        ROLE_NEW_USER_STANDARD_CERTIFICATION_DECISION: [
            '/declarations',
            `/declaration/${id}`,
        ],
    };

    const { user } = useSelector((state) => state.auth);

    let allowedRoutes = [];

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
            case 'ROLE_NEW_USER_STANDARD_CERTIFICATION_DECISION':
                props.allowedRoles.includes(role) &&
                    allowedRoutes.push(
                        ...routes.ROLE_NEW_USER_STANDARD_CERTIFICATION_DECISION
                    );
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
