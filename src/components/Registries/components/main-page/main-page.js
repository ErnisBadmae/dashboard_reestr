import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import React from 'react';
import './main-page.scss';

export const MainPage = () => {
    return (
        <>
            <Header />
            {/* <Content style={{ padding: '0 20px' }}>
                {/* <div className='breadcrumbs'>
          </div> */}
            <Outlet />
            {/* </Content> */}
        </>
    );
};
