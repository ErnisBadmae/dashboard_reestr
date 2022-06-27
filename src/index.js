import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store';
import ru_RU from 'antd/lib/locale/ru_RU';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ConfigProvider locale={ru_RU}>
                <App />
                <ToastContainer />
            </ConfigProvider>
        </Provider>
    </BrowserRouter>
);
