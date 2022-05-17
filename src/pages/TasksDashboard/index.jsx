import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TasksApi from '../../redux/api/tasks';

import TaskCard from '../../components/TaskCard';

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
                <TaskCard
                    key={task.id}
                    titulo={task.titulo}
                    descricao={task.descricao}
                    prioridade={task.prioridade}
                    categoria={task.categoria}
                    completada={task.completada}
                />
            ))
        );

    return <Container>{renderTasksList()}</Container>;
}

export default TasksDashboard;
