import TasksDashboard from '../pages/TasksDashboard';
import CategoriesList from '../pages/CategoriesList';
import CategoriesEditForm from '../pages/CategoriesForm/CategoriesEditForm';
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
        path: 'categorias',
    },
    {
        name: 'categoriesEditForm',
        Component: CategoriesEditForm,
        path: 'categorias/:id',
    },
    {
        name: 'noRouteFound',
        Component: NoRouteFound,
        path: '*',
    },
];

export default routes;
