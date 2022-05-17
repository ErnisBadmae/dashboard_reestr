import { AuthLayout } from './components/Layout/AuthLayout';
import { useNavigate, Routes, Route } from 'react-router-dom';

import { LayoutContent } from './components/Layout/Layout';
import RoutesComponent from './routes/routes';
import Registr from './pages/register/Registr';
import Login from './pages/login/Login';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, [user]);
    return (
        <div className="App">
            {user ? (
                <LayoutContent>
                    <RoutesComponent />
                </LayoutContent>
            ) : (
                <AuthLayout>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Registr />} />
                    </Routes>
                    {/* <RoutesComponent /> */}
                </AuthLayout>
            )}
        </div>
    );
}

export default App;
