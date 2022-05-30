import { AuthLayout } from './components/Layout/AuthLayout';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LayoutContent } from './components/Layout/LayoutContent';
import Declaration from './pages/declaration/Declaration';
import Registr from './pages/register/Registr';
import Login from './pages/login/Login';
import { TableRegistry } from './components/TableRegistry/TableRegistry';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';
import TableSds from './components/TableSds/TableSds';
import CurrentCard from './components/CurrentCard/CurrentCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const user = useSelector((state) => state.auth.user);
    //проверяю, если юзера нет и текущее место не совпадает с перечисленными, то редирект
    useEffect(() => {
        if (!user) {
            if (!['/login', '/register'].includes(pathname)) {
                navigate('/login');
            }
        }
    }, [user, pathname, navigate]);

    return (
        <div className="App">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registr />} />
                </Route>

                {!!user && (
                    <Route path="/" element={<LayoutContent />}>
                        <Route
                            element={
                                <RequireAuth allowedRoles={['ROLE_USER']} />
                            }
                        >
                            <Route
                                path="/declaration"
                                element={<Declaration />}
                            />
                            <Route path="/sds" element={<TableRegistry />} />
                        </Route>

                        <Route
                            element={
                                <RequireAuth
                                    allowedRoles={[
                                        'ROLE_NEW_USER_STANDARD_CERTIFICATION_DECISION',
                                    ]}
                                />
                            }
                        >
                            <Route
                                path="/declarations"
                                element={<TableSds />}
                            />
                            <Route
                                path="/declaration/:id"
                                element={<CurrentCard />}
                            />
                        </Route>

                        {/* <Route
                    element={
                        <RequireAuth
                            allowedRoles={['ROLE_DICTIONARY_REQUEST_STATUS_EDITOR']}
                        />
                    }
                >
                    <Route element={<LayoutContent />}>
                        <Route path="/editor/sds" element={<TableRegistry />} /> 
                    </Route>
                </Route> */}

                        <Route path="*" element={<NotFound />} />
                    </Route>
                )}
            </Routes>
        </div>
    );
}

export default App;
