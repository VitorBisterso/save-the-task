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

    updateTaskAction: task => {
        return {
            type: tasksActionsTypes.UPDATE_TASK_SUCCESS,
            payload: {
                task,
            },
        };
    },

    deleteTaskAction: id => {
        return {
            type: tasksActionsTypes.DELETE_TASK_SUCCESS,
            payload: {
                id,
            },
        };
    },

    createTaskAction: task => {
        return {
            type: tasksActionsTypes.CREATE_TASK_SUCCESS,
            payload: {
                task,
            },
        };
    },

    fetchTaskByIdSuccessAction: task => {
        return {
            type: tasksActionsTypes.FETCH_TASK_BY_ID_SUCCESS,
            payload: {
                task,
            },
        };
    },
};

export default tasksActions;
