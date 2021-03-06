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

    updateCategoryAction: category => {
        return {
            type: categoriesActionsTypes.UPDATE_CATEGORY_SUCCESS,
            payload: {
                category,
            },
        };
    },

    createCategoryAction: category => {
        return {
            type: categoriesActionsTypes.CREATE_CATEGORY_SUCCESS,
            payload: {
                category,
            },
        };
    },

    deleteCategoryAction: id => {
        return {
            type: categoriesActionsTypes.DELETE_CATEGORY_SUCCESS,
            payload: {
                id,
            },
        };
    },
};

export default categoriesActions;
