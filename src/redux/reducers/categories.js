import categoriesActionsTypes from '../constants/categories';

export const initialState = {
    isLoading: false,
    categories: [],
    selectedCategory: {},
    hasError: false,
};

// eslint-disable-next-line default-param-last
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case categoriesActionsTypes.CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        case categoriesActionsTypes.CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        case categoriesActionsTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: [...action.payload.categories],
            };
        case categoriesActionsTypes.FETCH_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                selectedCategory: { ...action.payload.category },
            };
        case categoriesActionsTypes.UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                selectedCategory: {},
            };
        case categoriesActionsTypes.DELETE_CATEGORY_SUCCESS: {
            const { id } = action.payload;

            const newCategories = state.categories.filter(
                category => category.id !== id
            );

            return {
                ...state,
                isLoading: false,
                categories: [...newCategories],
            };
        }
        default:
            return state;
    }
};

export default categoriesReducer;
