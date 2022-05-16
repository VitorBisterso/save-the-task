import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TasksApi from '../../redux/api/tasks';

import { Container } from './styles';

function TasksDashboard() {
    const dispatch = useDispatch();
    const { tasks, isLoading } = useSelector(state => state.tasksReducer);

    useEffect(() => {
        dispatch(TasksApi.fetchAllTasks());
    }, []);

    const renderTasksList = () =>
        isLoading ? (
            <p>loading...</p>
        ) : (
            tasks &&
            tasks.map(task => (
                <div key={task.id}>
                    <p>{task.titulo}</p>
                    <p>{task.descricao}</p>
                    <p>{task.prioridade}</p>
                    <p>{task.categoria.nome}</p>
                    <p>{task.categoria.cor}</p>
                    <p>{task.completada}</p>
                    <p>{task.dono}</p>
                </div>
            ))
        );

    return <Container>{renderTasksList()}</Container>;
}

export default TasksDashboard;
