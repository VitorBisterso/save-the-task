import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TasksApi from '../../redux/api/tasks';

import TaskCard from '../../components/TaskCard';
import AddCardButton from '../../components/AddCardButton';

import { Container } from './styles';

function TasksDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { tasks, isLoading } = useSelector(state => state.tasksReducer);

    useEffect(() => {
        dispatch(TasksApi.fetchAllTasks());
    }, []);

    const renderTasksList = () =>
        isLoading ? (
            <p>Carregando...</p>
        ) : (
            tasks && tasks.map(task => <TaskCard key={task.id} tarefa={task} />)
        );

    return (
        <Container>
            {renderTasksList()}
            <AddCardButton onClick={() => navigate('/tarefas/criar')} />
        </Container>
    );
}

export default TasksDashboard;
