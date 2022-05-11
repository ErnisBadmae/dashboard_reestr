import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const Wrapper = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
