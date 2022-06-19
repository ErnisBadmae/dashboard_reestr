import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';

import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ConfigProvider locale={ru_RU}>
                <App />
            </ConfigProvider>
        </Provider>
    </BrowserRouter>
);
