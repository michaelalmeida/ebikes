import { BrowserRouter, Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { ROUTES } from '../Constants/routes';
import { PublicLayout } from '../Layout/PublicLayout/PublicLayout';
import { Home } from '../Screen/Home/Home';
import { Login } from '../Screen/Login/Login';

export const Routes = () => {
    return (
        <BrowserRouter>
            <PublicLayout>
                <ReactRouterRoutes>
                    <Route element={<Home />} path={ROUTES.HOME} />
                    <Route element={<Login />} path={ROUTES.LOGIN} />
                </ReactRouterRoutes>
            </PublicLayout>
        </BrowserRouter>
    );
};
