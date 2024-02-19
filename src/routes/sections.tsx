import {lazy, Suspense} from 'react';
import {Outlet, Navigate, useRoutes} from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const PrivateRoute = lazy(() => import('../layouts/PrivateRoute'));
export const UserPage = lazy(() => import('../pages/user'));
export const LoginPage = lazy(() => import('../pages/login'));
export const SignUpPage = lazy(() => import('../pages/signup'));
export const Page404 = lazy(() => import('../pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            index: true,
            path: 'login',
            element: <LoginPage/>
        },
        {
            path: 'signup',
            element: <SignUpPage/>
        },
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet/>
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                {path: "dashboard", element: <PrivateRoute element={<IndexPage/>}/>},
                {path: 'user', element: <PrivateRoute element={<UserPage/>}/>},
            ],
        },
        {
            path: '404',
            element: <Page404/>,
        },
        {
            path: '*',
            element: <Navigate to="/login" replace/>,
        },
    ]);

    return routes;
}
