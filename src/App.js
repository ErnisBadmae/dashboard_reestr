import { AuthLayout } from './components/Layout/AuthLayout';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LayoutContent } from './components/Layout/LayoutContent';
import Declaration from './pages/declaration/Declaration';
import Registr from './pages/register/Registr';
import Login from './pages/login/Login';
import { TableRegistry } from './components/TableRegistry/TableRegistry';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';
import { TableSds } from './components/TableSds/TableSds';
import { TableSdsOperator } from './components/TableSds/TableSdsOperator';
import CurrentCard from './components/CurrentCard/Current/CurrentCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { TableWrapper } from './components/TableWrapper/tableWrapper';
import FormSdc from './components/FormSdc/FormSdc';
import ProposalSdc from './pages/proposalSdc/proposalSdc';
import EditProposalCard from './components/CurrentCard/Current/EditProposalCard';
import FormOsSdc from './components/FormSdc/FormOs';
import CurrentOsSdc from './components/CurrentCard/CurrentOs/CurrentOs';
import EditCardOs from './components/CurrentCard/EditCard/EditCardOs';

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const user = useSelector((state) => state.auth.user);

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
                            element={<RequireAuth allowedRoles={'user_sdc'} />}
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
                                    allowedRoles={['user_sdc', 'user_admin']}
                                />
                            }
                        >
                            {/* <Route element={<TableWrapper />}> */}

                            <Route
                                path="/new-request-sdc"
                                element={<FormSdc />}
                            />
                            <Route
                                path="/requests_sdc"
                                element={<TableSdsOperator />}
                            />
                            <Route
                                path="/request_sdc/:id"
                                element={<ProposalSdc />}
                            />
                            <Route
                                path="/edit-card/:id"
                                element={<EditProposalCard />}
                            />
                            <Route
                                path="/declaration"
                                element={<Declaration />}
                            />

                            <Route
                                path="/form-os-sdc"
                                element={<FormOsSdc />}
                            />
                            <Route path="current-os">
                                <Route path=":id" element={<CurrentOsSdc />} />
                            </Route>
                            <Route
                                path="/edit-card-os/:id"
                                element={<EditCardOs />}
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                )}
            </Routes>
        </div>
    );
}

export default App;
