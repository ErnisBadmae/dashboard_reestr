import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function LayoutContent(props) {
    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <Footer />
        </>
    );
}

export default LayoutContent;
