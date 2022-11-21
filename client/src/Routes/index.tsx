import { BrowserRouter, Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { routes } from '../Constants/routes';
import { PublicLayout } from '../Layout/PublicLayout/PublicLayout';
import { Home } from '../Screen/Home/Home';

export const Routes = () => {
    return (
        <BrowserRouter>
            <PublicLayout>
                <ReactRouterRoutes>
                    <Route element={<Home />} path={routes.HOME} />
                </ReactRouterRoutes>
            </PublicLayout>
        </BrowserRouter>
    );
};
