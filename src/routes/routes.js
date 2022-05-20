import TasksDashboard from '../pages/TasksDashboard';
import CategoriesList from '../pages/CategoriesList';
import CategoriesEditForm from '../pages/CategoriesForm/CategoriesEditForm';
import CategoriesCreateForm from '../pages/CategoriesForm/CategoriesCreateForm';
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
        name: 'categoriesCreateForm',
        Component: CategoriesCreateForm,
        path: 'categorias/criar',
    },
    {
        name: 'noRouteFound',
        Component: NoRouteFound,
        path: '*',
    },
];

export default routes;
