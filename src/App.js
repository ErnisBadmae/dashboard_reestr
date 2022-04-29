import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Registr from './pages/register/Registr'
import Login from './pages/login/Login'
import NotFound from './pages/not-found/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="registr" element={< Registr />} />
            <Route path="*" element={< NotFound />} />            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
