import tasksActions from '../actions/tasks';

import axios from './axios';

const fetchAllTasks = () => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .get(`/tarefas`)
        .then(res => {
            dispatch(tasksActions.fetchAllTasksSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

export default { fetchAllTasks };
