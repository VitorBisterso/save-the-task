import tasksActionsTypes from '../constants/tasks';

const tasksActions = {
    fetchAllProductsRequestAction: () => ({
        type: tasksActionsTypes.FETCH_ALL_TASKS_REQUEST,
    }),
    fetchAllProductsFailedAction: () => ({
        type: tasksActionsTypes.FETCH_ALL_TASKS_FAILED,
    }),
    fetchAllProductsSuccessAction: tasks => {
        return {
            type: tasksActionsTypes.FETCH_ALL_TASKS_SUCCESS,
            payload: {
                tasks,
            },
        };
    },
};

export default tasksActions;
