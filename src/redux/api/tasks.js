import tasksActions from '../actions/tasks';

import axios from './axios';

const fetchAllTasks = () => dispatch => {
    dispatch(tasksActions.fetchAllTasksRequestAction);

    axios
        .get(`/tarefas`)
        .then(res => {
            dispatch(tasksActions.fetchAllTasksSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(tasksActions.fetchAllTasksFailedAction());
        });
};

export default { fetchAllTasks };
