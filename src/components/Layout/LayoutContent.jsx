import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { Outlet } from 'react-router-dom';

export const LayoutContent = (props) => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>

            <Footer />
        </>
    );
};
