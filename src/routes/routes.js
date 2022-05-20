import TasksDashboard from '../pages/TasksDashboard';
import TasksCreateForm from '../pages/TasksForm/TasksCreateForm';
import TasksEditForm from '../pages/TasksForm/TasksEditForm';

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
        name: 'tasksEditForm',
        Component: TasksEditForm,
        path: 'tarefas/:id',
    },
    {
        name: 'tasksCreateForm',
        Component: TasksCreateForm,
        path: 'tarefas/criar',
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
