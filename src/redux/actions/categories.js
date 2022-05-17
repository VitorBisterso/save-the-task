import categoriesActionsTypes from '../constants/categories';

const categoriesActions = {
    fetchAllCategoriesRequestAction: () => ({
        type: categoriesActionsTypes.FETCH_ALL_CATEGORIES_REQUEST,
    }),
    fetchAllProductsFailedAction: () => ({
        type: categoriesActionsTypes.FETCH_ALL_CATEGORIES_FAILED,
    }),
    fetchAllProductsSuccessAction: categories => {
        return {
            type: categoriesActionsTypes.FETCH_ALL_CATEGORIES_SUCCESS,
            payload: {
                categories,
            },
        };
    },
};

export default categoriesActions;
