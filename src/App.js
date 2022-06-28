import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from './pages/login/Login';
import Declaration from './pages/declaration/Declaration';
import Registr from './pages/register/Registr';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';
import FormSdc from './components/FormSdc/FormSdc';
import ProposalSdc from './pages/proposalSdc/proposalSdc';
import EditProposalCard from './components/CurrentCard/Current/EditProposalCard';
import FormOsSdc from './components/FormSdc/FormOs';
import CurrentOsSdc from './components/CurrentCard/CurrentOs/CurrentOs';
import EditCardOs from './components/CurrentCard/EditCard/EditCardOs';
import EditCardHolders from './components/CurrentCard/EditCard/EditCardHolders';
import CurrentUser from './components/CurrentCard/CurrentUser/CurrentUser';
import CurrentUploadDocument from './components/FileUploadInput/CurrentUploadDocument';
import CardExpert from './pages/registries/registry-certificate-expert/card-reg-cert-exp/card-reg-cert-exp';
import CardSertificate from './pages/registries/registry-certificates/card-certificates/card-certificates';
import CardSdc from './pages/registries/registry-sds/card-sds/card-sds';
import CardOs from './pages/registries/registry-os/card-os/card-os';
// import Dialogs from './components/Dialogs/Dialogs';

import { AuthLayout } from './components/Layout/AuthLayout';
import { LayoutContent } from './components/Layout/LayoutContent';
import { TableRegistry } from './components/TableRegistry/TableRegistry';
import { TableSdsOperator } from './components/TableSds/TableSdsOperator';
import { TableWrapper } from './components/Registries/tableWrapper/tableWrapper';
import { TableSdcAdmin } from './components/TableSds/TableSdcAdmin';
import { RegistrySds } from './pages/registries/registry-sds/registry-sds';
import { RegistryOs } from './pages/registries/registry-os/registry-os';
import { RegistryCertificationExperts } from './pages/registries/registry-certificate-expert/registryCertificateExperts';
import { RegistryCertificates } from './pages/registries/registry-certificates/registry-certificates';
import { TableUsers } from './components/TableUsers/TableUsers';

function App() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const { pathname } = useLocation();

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
                            path="/organ-certification-expert/view/:id"
                            element={<CardExpert />}
                        />
                        <Route
                            path="/certificate/view/:id"
                            element={<CardSertificate />}
                        />
                        <Route
                            path="/standard-certification/view/:id"
                            element={<CardSdc />}
                        />
                        <Route
                            path="/organ-certification/view/:id"
                            element={<CardOs />}
                        />
                        <Route element={<TableWrapper />}>
                            <Route
                                path="/standard-certifications/list"
                                element={<RegistrySds />}
                            />
                            <Route
                                path="/organ-certifications/list"
                                element={<RegistryOs />}
                            />
                            <Route
                                path="/organ-certification-experts/list"
                                element={<RegistryCertificationExperts />}
                            />
                            <Route
                                path="/certificates/list"
                                element={<RegistryCertificates />}
                            />
                        </Route>

                        {/* <Route path="dialogs" element={<Dialogs />}></Route> */}
                        <Route path="users" element={<TableUsers />} />
                        <Route path="users/:id" element={<CurrentUser />} />

                        <Route
                            element={
                                <RequireAuth allowedRoles={['user_admin']} />
                            }
                        >
                            <Route
                                path="/declaration-admin"
                                element={<Declaration />}
                            />
                            <Route
                                path="/requests-sdc-list"
                                element={<TableSdcAdmin />}
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
                            {/* <Route
                                path="/current-document"
                                element={<FormOsSdc />}
                            /> */}
                            <Route
                                path="/request_sdc/:id/current-document/:documentId"
                                element={<CurrentUploadDocument />}
                            />
                            <Route path="current-os">
                                <Route path=":id" element={<CurrentOsSdc />} />
                            </Route>
                            <Route
                                path="/edit-card-os/:id"
                                element={<EditCardOs />}
                            />
                            <Route path="holder">
                                <Route
                                    path=":id"
                                    element={<EditCardHolders />}
                                />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                )}
            </Routes>
        </div>
    );
}

export default App;
