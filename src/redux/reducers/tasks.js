import tasksActionsTypes from '../constants/tasks';

export const initialState = {
    isLoading: false,
    tasks: [],
    hasError: false,
};

// eslint-disable-next-line default-param-last
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksActionsTypes.TASKS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case tasksActionsTypes.TASKS_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        case tasksActionsTypes.FETCH_ALL_TASKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tasks: action.payload.tasks,
            };
        case tasksActionsTypes.UPDATE_TASKS_SUCCESS: {
            const { task } = action.payload;

            const filteredTasks = state.tasks.filter(t => t.id !== task.id);

            return {
                ...state,
                isLoading: false,
                tasks: [...filteredTasks, task],
            };
        }
        default:
            return state;
    }
};

export default tasksReducer;
