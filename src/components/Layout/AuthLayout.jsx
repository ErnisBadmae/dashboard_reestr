import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import AuthFooter from '../Footer/AuthFooter';
import AuthMain from '../Main/AuthMain';

export const AuthLayout = () => {
    return (
        <>
            <AuthHeader />
            <AuthMain>
                <Outlet />
            </AuthMain>

            <AuthFooter />
        </>
    );
};
