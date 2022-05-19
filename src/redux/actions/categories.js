import categoriesActionsTypes from '../constants/categories';

const categoriesActions = {
    requestAction: () => ({
        type: categoriesActionsTypes.CATEGORIES_REQUEST,
    }),
    failedAction: () => ({
        type: categoriesActionsTypes.CATEGORIES_FAILED,
    }),

    fetchAllCategoriesSuccessAction: categories => {
        return {
            type: categoriesActionsTypes.FETCH_ALL_CATEGORIES_SUCCESS,
            payload: {
                categories,
            },
        };
    },

    fetchCategoryByIdSuccessAction: category => {
        return {
            type: categoriesActionsTypes.FETCH_CATEGORY_BY_ID_SUCCESS,
            payload: {
                category,
            },
        };
    },
};

export default categoriesActions;
