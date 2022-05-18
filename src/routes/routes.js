import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Registr from '../pages/register/Registr';
// import Login from './pages/login/Login';
import NotFound from '../pages/not-found/NotFound';
import Declaration from '../pages/declaration/Declaration';
// import Login from './pages/test-register/Signin';
import Login from '../pages/login/Login';
import { TableRegistry } from '../components/TableRegistry/TableRegistry';
import { Wrapper } from '../components/Wrapper/Wrapper';

function RoutesComponent(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="declaration" element={<Declaration />} />
                    <Route path="sds" element={<TableRegistry />} />
                    {/* <Route path="auth" element={<Wrapper />}> */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </>
    );
}

export default RoutesComponent;
