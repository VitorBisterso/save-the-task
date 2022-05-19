import tasksActionsTypes from '../constants/tasks';

const tasksActions = {
    requestAction: () => ({
        type: tasksActionsTypes.TASKS_REQUEST,
    }),
    failedAction: () => ({
        type: tasksActionsTypes.TASKS_FAILED,
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
