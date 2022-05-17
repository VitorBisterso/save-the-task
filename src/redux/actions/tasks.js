import tasksActionsTypes from '../constants/tasks';

const tasksActions = {
    fetchAllTasksRequestAction: () => ({
        type: tasksActionsTypes.FETCH_ALL_TASKS_REQUEST,
    }),
    fetchAllTasksFailedAction: () => ({
        type: tasksActionsTypes.FETCH_ALL_TASKS_FAILED,
    }),
    fetchAllTasksSuccessAction: tasks => {
        return {
            type: tasksActionsTypes.FETCH_ALL_TASKS_SUCCESS,
            payload: {
                tasks,
            },
        };
    },
};

export default tasksActions;
