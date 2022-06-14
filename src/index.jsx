import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';

import './index.css';
import history from './history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HistoryRouter history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </HistoryRouter>
    </React.StrictMode>
);
