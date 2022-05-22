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
                <Route path="/" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Registr />} />

                    <Route element={<RequireAuth allowedRoutes={['/admin']} />}>
                        <Route path="admin" element={<LayoutContent />}>
                            <Route path="sds" element={<TableRegistry />} />
                            <Route
                                path="declaration"
                                element={<Declaration />}
                            />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
