import { useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const RequireAuth = (props) => {
    const { pathname } = useLocation();
    const { sdcId, documentId, expertId, holderId, oSid, regId } = useParams();

    const routes = {
        user_admin: [
            '/declarations',
            `/declaration/${sdcId}`,
            '/requests-sdc-list',
            `/request_sdc/${sdcId}`,
            `/edit-card/${sdcId}`,
            `/current-os/${oSid}`,
            '/users',
            `/users/${sdcId}`,
            `/current-expert-os/${expertId}`,
            `/request_sdc/${sdcId}/form-holder`,
            `/request_sdc/${sdcId}/current-document/${documentId}`,
            '/registration-sdc',
            `/current-request-sdc-reg/${regId}`,
            '/messages',
        ],
        user_sdc: [
            '/requests_sdc',
            `/request_sdc/${sdcId}`,
            '/new-request-sdc',
            `/edit-card/${sdcId}`,
            '/current-proposal',
            '/declaration',
            `/request_sdc/${sdcId}/form-os-sdc`,
            `/current-os/${oSid}`,
            `/edit-card-os/${sdcId}`,
            `/holder/${holderId}`,
            `/request_sdc/${sdcId}/current-document/${documentId}`,
            '/form-expert-os',
            `/current-expert-os/${expertId}`,
            `/edit-expert/${expertId}`,
            `/request_sdc/${sdcId}/form-holder`,
            '/messages',
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
