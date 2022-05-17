import TasksDashboard from '../pages/TasksDashboard';
import CategoriesList from '../pages/CategoriesList';
import NoRouteFound from '../pages/NoRouteFound';

const routes = [
    {
        name: 'tasksDashboard',
        Component: TasksDashboard,
        path: '/',
        isExact: true,
    },
    {
        name: 'categoriesList',
        Component: CategoriesList,
        path: '/categorias',
    },
    {
        name: 'noRouteFound',
        Component: NoRouteFound,
        path: '*',
    },
];

export default routes;
