import categoriesActions from '../actions/categories';

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
            dispatch(categoriesActions.updateCategory(res.data));
        })
        .catch(() => {
            dispatch(categoriesActions.failedAction());
        });
};

export default { fetchAllCategories, fetchCategoryById, updateCategory };