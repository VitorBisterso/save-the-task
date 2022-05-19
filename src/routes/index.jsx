import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import routes from './routes';

function AppRoutes() {
    return (
        <Switch>
            {routes.map(route => {
                const { name, path, isExact, Component } = route;
                return (
                    <Route
                        key={name}
                        path={path}
                        exact={isExact}
                        element={<Component />}
                    />
                );
            })}
        </Switch>
    );
}

export default AppRoutes;
