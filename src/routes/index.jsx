import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import routes from './routes';

function AppRoutes() {
    return (
        <Switch>
            {routes.map(route => {
                const { name, Component, path, isExact } = route;
                return (
                    <Route
                        exact={isExact}
                        path={path}
                        key={name}
                        element={<Component />}
                    />
                );
            })}
        </Switch>
    );
}

export default AppRoutes;
