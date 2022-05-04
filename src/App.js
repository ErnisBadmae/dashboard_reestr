import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Registr from './pages/register/Registr';
// import Login from './pages/login/Login';
import NotFound from './pages/not-found/NotFound';
import Declaration from './pages/declaration/Declaration';
// import Login from './pages/test-register/Signin';
import Login from './pages/login/Login';
import { TableRegistry } from './components/TableRegistry/TableRegistry';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="login" element={<Login />} /> */}
                    <Route path="auth/register" element={<Registr />} />
                    <Route path="declaration" element={<Declaration />} />
                    <Route path="sds" element={<TableRegistry />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
