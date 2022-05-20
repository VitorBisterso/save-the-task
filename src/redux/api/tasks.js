import tasksActions from '../actions/tasks';

import axios from './axios';

const fetchAllTasks = () => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .get('/tarefas')
        .then(res => {
            dispatch(tasksActions.fetchAllTasksSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

const updateTask = task => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .put(`/tarefas/${task.id}`, task)
        .then(() => {
            dispatch(tasksActions.updateTaskAction(task));
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

export default { fetchAllTasks, updateTask };
