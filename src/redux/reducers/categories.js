import categoriesActionsTypes from '../constants/categories';

export const initialState = {
    isLoading: false,
    categories: [],
    hasError: false,
};

// eslint-disable-next-line default-param-last
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case categoriesActionsTypes.FETCH_ALL_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case categoriesActionsTypes.FETCH_ALL_CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        case categoriesActionsTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload.categories,
            };
        default:
            return state;
    }
};

export default categoriesReducer;
