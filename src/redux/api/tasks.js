import tasksActions from '../actions/tasks';
import history from '../../history';

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
            history.push('/');
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

const deleteTask = id => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .delete(`/tarefas/${id}`)
        .then(() => {
            dispatch(tasksActions.deleteTaskAction(id));
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

const createTask = task => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .post(`/tarefas`, task)
        .then(() => {
            dispatch(tasksActions.createTaskAction(task));
            history.push('/');
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

const fetchTaskById = id => dispatch => {
    dispatch(tasksActions.requestAction);

    axios
        .get(`/tarefas/${id}`)
        .then(res => {
            dispatch(tasksActions.fetchTaskByIdSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(tasksActions.failedAction());
        });
};

export default {
    fetchAllTasks,
    updateTask,
    deleteTask,
    createTask,
    fetchTaskById,
};
