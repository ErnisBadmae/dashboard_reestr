import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <Outlet />
        </div>
    );
}

export default Home;
