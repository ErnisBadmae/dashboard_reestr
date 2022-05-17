import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Wrapper } from '../Wrapper/Wrapper';
import { Outlet } from 'react-router-dom';

export const LayoutContent = (props) => {
    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <Outlet />
            <Footer />
        </>
    );
};
