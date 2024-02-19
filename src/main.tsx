import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
// import {CookiesProvider} from 'react-cookie';
import {Provider} from 'react-redux';
import store from './store';

import App from './app';

// ----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                {/*<CookiesProvider>*/}
                <BrowserRouter>
                    <Suspense>
                        <App/>
                    </Suspense>
                </BrowserRouter>
                {/*</CookiesProvider>*/}
            </Provider>
        </HelmetProvider>
    </React.StrictMode>,
);
