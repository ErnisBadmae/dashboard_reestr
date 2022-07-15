import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from './pages/login/Login';
// import Declaration from './pages/declaration/Declaration';
import Registr from './pages/register/Registr';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';
import ProposalSdc from './pages/proposalSdc/proposalSdc';
import EditProposalCard from './components/CurrentCard/Current/EditProposalCard';
import FormWrapper from './components/FormSdc/FormWrapper';
import CurrentOsSdc from './components/CurrentCard/CurrentOs/CurrentOs';
import EditCardOs from './components/CurrentCard/EditCard/EditCardOs';
import EditCardHolders from './components/CurrentCard/EditCard/EditCardHolders';
import EditExpert from './components/CurrentCard/EditCard/EditExpert';
import CurrentUser from './components/CurrentCard/CurrentUser/CurrentUser';
import CurrentUploadDocument from './components/FileUploadInput/CurrentUploadDocument';
import CardExpert from './pages/registries/registry-certificate-expert/card-reg-cert-exp/card-reg-cert-exp';
import CardSertificate from './pages/registries/registry-certificates/card-certificates/card-certificates';
import CardSdc from './pages/registries/registry-sds/card-sds/card-sds';
import CardOs from './pages/registries/registry-os/card-os/card-os';
import CurrentExpert from './components/CurrentCard/CurrentExpert/CurrentExpert';
import CurrentRequestSdcUser from './components/CurrentCard/CurrentRequestSdcUser';
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
import { Reports } from './pages/reports/Reports';
import { RequestUsersSdc } from './components/TableUsers/RequestUsersSdc';

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

                        <Route path="reports" element={<Reports />} />

                        <Route
                            element={
                                <RequireAuth allowedRoles={['user_admin']} />
                            }
                        >
                            <Route path="/users" element={<TableUsers />} />

                            <Route
                                path="/registration-sdc"
                                element={<RequestUsersSdc />}
                            />
                            <Route path="current-request-sdc-reg">
                                <Route
                                    path=":id"
                                    element={<CurrentRequestSdcUser />}
                                />
                            </Route>

                            <Route
                                path="/users/:id"
                                element={<CurrentUser />}
                            />
                            {/* <Route
                                path="/declaration-admin"
                                element={<Declaration />}
                            /> */}
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
                            <Route
                                path="/new-request-sdc"
                                element={
                                    <FormWrapper
                                        formTitle="Заявление СДС"
                                        formType="newSdc"
                                    />
                                }
                            />
                            <Route
                                path="/form-expert-os"
                                element={
                                    <FormWrapper
                                        formTitle="Сведения об эксперте"
                                        formType="expert"
                                    />
                                }
                            />
                            <Route
                                path="/edit-expert/:expertId"
                                element={
                                    <FormWrapper
                                        formTitle="Редактирование эксперта"
                                        formType="editExpert"
                                    />
                                }
                            />
                            <Route
                                path="/request_sdc/:id/form-os-sdc"
                                element={
                                    <FormWrapper
                                        formTitle="Сведение об ОС"
                                        formType="osSdc"
                                    />
                                }
                            />
                            <Route
                                path="/request_sdc/:id/form-holder"
                                element={
                                    <FormWrapper
                                        formTitle="Сведения о держателе"
                                        formType="newHolder"
                                    />
                                }
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

                            <Route path="current-os">
                                <Route path=":id" element={<CurrentOsSdc />} />
                            </Route>
                            <Route
                                path="/edit-card-os/:id"
                                element={<EditCardOs />}
                            />

                            <Route path="current-expert-os">
                                <Route path=":id" element={<CurrentExpert />} />
                            </Route>
                            {/* 
                            <Route
                                path="/edit-expert/:id"
                                element={<EditExpert />}
                            /> */}

                            <Route
                                path="/request_sdc/:id/current-document/:documentId"
                                element={<CurrentUploadDocument />}
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
