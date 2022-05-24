import { AuthLayout } from './components/Layout/AuthLayout';
import { Routes, Route } from 'react-router-dom';
import { LayoutContent } from './components/Layout/LayoutContent';
import Declaration from './pages/declaration/Declaration';
import Registr from './pages/register/Registr';
import Login from './pages/login/Login';
import { TableRegistry } from './components/TableRegistry/TableRegistry';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './pages/not-found/NotFound';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Registr />} />
                </Route>

                <Route path="/" element={<LayoutContent />}>
                    <Route
                        element={<RequireAuth allowedRoles={['ROLE_USER']} />}
                    >
                        <Route path="/sds" element={<TableRegistry />} />
                    </Route>

                    <Route
                        element={
                            <RequireAuth
                                allowedRoles={['ROLE_DICTIONARY_EDITOR']}
                            />
                        }
                    >
                        <Route path="/declaration" element={<Declaration />} />
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
            </Routes>
        </div>
    );
}

export default App;
