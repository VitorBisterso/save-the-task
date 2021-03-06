import categoriesActions from '../actions/categories';
import history from '../../history';

import axios from './axios';

const fetchAllCategories = () => dispatch => {
    dispatch(categoriesActions.requestAction);

    axios
        .get(`/categorias`)
        .then(res => {
            dispatch(
                categoriesActions.fetchAllCategoriesSuccessAction(res.data)
            );
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

const fetchCategoryById = id => dispatch => {
    dispatch(categoriesActions.requestAction);

    axios
        .get(`/categorias/${id}`)
        .then(res => {
            dispatch(
                categoriesActions.fetchCategoryByIdSuccessAction(res.data)
            );
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

const updateCategory = category => dispatch => {
    dispatch(categoriesActions.requestAction);

    axios
        .put(`/categorias/${category.id}`, category)
        .then(res => {
            dispatch(categoriesActions.updateCategoryAction(res.data));
            history.push('/categorias');
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

const createCategory = category => dispatch => {
    dispatch(categoriesActions.requestAction);

    axios
        .post('/categorias', category)
        .then(res => {
            dispatch(categoriesActions.createCategoryAction(res.data));
            history.push('/categorias');
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

const deleteCategory = id => dispatch => {
    dispatch(categoriesActions.requestAction);

    axios
        .delete(`/categorias/${id}`)
        .then(() => {
            dispatch(categoriesActions.deleteCategoryAction(id));
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

export default {
    fetchAllCategories,
    fetchCategoryById,
    updateCategory,
    createCategory,
    deleteCategory,
};
