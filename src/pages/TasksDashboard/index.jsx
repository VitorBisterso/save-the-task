import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TasksApi from '../../redux/api/tasks';

import TaskCard from '../../components/TaskCard';

import { Container } from './styles';
import AddCardButton from '../../components/AddCardButton';

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

    return (
        <Container>
            {renderTasksList()}
            <AddCardButton onClick={() => undefined} />
        </Container>
    );
}

export default TasksDashboard;
