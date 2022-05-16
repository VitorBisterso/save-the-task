import TasksDashboard from '../pages/TasksDashboard';
import NoRouteFound from '../pages/NoRouteFound';

const routes = [
    {
        name: 'tasksDashboard',
        Component: TasksDashboard,
        path: '/',
        isExact: true,
    },
    {
        name: 'noRouteFound',
        Component: NoRouteFound,
        path: '*',
    },
];

export default routes;
