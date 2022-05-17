import { Outlet } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    //     useEffect(() => {
    //         if (!user) {
    //             navigate('/login');
    //         }
    //     }, []);
    return (
        <div>
            {/* <Layout> */}

            <Outlet />
            {/* </Layout> */}
        </div>
    );
}

export default Home;
