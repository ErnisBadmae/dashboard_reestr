import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from './pages/login/Login';
import Registr from './pages/register/Registr';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';
import ProposalSdc from './pages/proposalSdc/proposalSdc';
import FormWrapper from './components/FormSdc/FormWrapper';
import CurrentOsSdc from './components/CurrentCard/CurrentOs/CurrentOs';
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
                            path="/organ-certification-expert/view/:sdcId"
                            element={<CardExpert />}
                        />
                        <Route
                            path="/certificate/view/:sdcId"
                            element={<CardSertificate />}
                        />
                        <Route
                            path="/standard-certification/view/:sdcId"
                            element={<CardSdc />}
                        />
                        <Route
                            path="/organ-certification/view/:sdcId"
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
                                    path=":regId"
                                    element={<CurrentRequestSdcUser />}
                                />
                            </Route>

                            <Route
                                path="/users/:id"
                                element={<CurrentUser />}
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
                            <Route
                                path="/new-request-sdc"
                                element={
                                    <FormWrapper
                                        formTitle="Заявление"
                                        formType="newSdc"
                                    />
                                }
                            />
                            <Route
                                path="/edit-card/:sdcId"
                                element={
                                    <FormWrapper
                                        formTitle="Редактирование СДС"
                                        formType="editSdc"
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
                                path="/request_sdc/:sdcId/form-os-sdc"
                                element={
                                    <FormWrapper
                                        formTitle="Сведение об ОС"
                                        formType="osSdc"
                                    />
                                }
                            />
                            <Route
                                path="/edit-card-os/:sdcId"
                                element={
                                    <FormWrapper
                                        formTitle="Редактирование ОС"
                                        formType="editOs"
                                    />
                                }
                            />
                            <Route
                                path="/request_sdc/:sdcId/form-holder"
                                element={
                                    <FormWrapper
                                        formTitle="Сведения о Держателе (Организации, представившая систему на регистрацию)"
                                        formType="newHolder"
                                    />
                                }
                            />
                            <Route path="holder">
                                <Route
                                    path=":holderId"
                                    element={
                                        <FormWrapper
                                            formTitle="Редактирование держателя"
                                            formType="editHolder"
                                        />
                                    }
                                />
                            </Route>

                            <Route
                                path="/requests_sdc"
                                element={<TableSdsOperator />}
                            />
                            <Route
                                path="/request_sdc/:sdcId"
                                element={<ProposalSdc />}
                            />

                            <Route path="current-os">
                                <Route
                                    path=":oSid"
                                    element={<CurrentOsSdc />}
                                />
                            </Route>

                            <Route path="current-expert-os">
                                <Route
                                    path=":expertId"
                                    element={<CurrentExpert />}
                                />
                            </Route>

                            <Route
                                path="/request_sdc/:sdcId/current-document/:documentId"
                                element={<CurrentUploadDocument />}
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
