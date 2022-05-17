import categoriesActions from '../actions/categories';

import axios from './axios';

const fetchAllCategories = () => dispatch => {
    dispatch(categoriesActions.fetchAllCategoriesRequestAction);

    axios
        .get(`/categorias`)
        .then(res => {
            dispatch(categoriesActions.fetchAllProductsSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(categoriesActions.fetchAllProductsFailedAction());
        });
};

export default { fetchAllCategories };
