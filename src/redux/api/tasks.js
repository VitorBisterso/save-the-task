import tasksActions from '../actions/tasks';

import axios from './axios';

const fetchAllTasks = () => dispatch => {
    dispatch(tasksActions.fetchAllProductsRequestAction);

    axios
        .get(`/tarefas`)
        .then(res => {
            dispatch(tasksActions.fetchAllProductsSuccessAction(res.data));
        })
        .catch(error => {
            dispatch(tasksActions.fetchAllProductsFailedAction(error));
        });
};

export default { fetchAllTasks };
