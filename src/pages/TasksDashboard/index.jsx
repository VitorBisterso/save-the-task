import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TasksApi from '../../redux/api/tasks';

import Utils from '../../utils';

import TaskCard from '../../components/TaskCard';
import AddCardButton from '../../components/AddCardButton';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import { Container, Row, ListContainer } from './styles';

function TasksDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { tasks, isLoading } = useSelector(state => state.tasksReducer);

    useEffect(() => {
        dispatch(TasksApi.fetchAllTasks());
    }, []);

    const [deadline, setDeadline] = useState(Utils.getDateYYYYMMDD());
    const [deadlineActive, setDeadlineActive] = useState(false);
    const [onlyIncomplete, setOnlyIncomplete] = useState(false);

    const renderTasksList = () =>
        isLoading ? (
            <p>Carregando...</p>
        ) : (
            tasks &&
            tasks
                .filter(task => {
                    if (deadlineActive) {
                        const currentDate = Utils.getDateYYYYMMDD(
                            task.dataLimite
                        );

                        const shouldRender =
                            new Date(currentDate).getTime() <=
                            new Date(deadline).getTime();

                        return shouldRender && task;
                    }

                    return task;
                })
                .map(task => {
                    const component = <TaskCard key={task.id} tarefa={task} />;

                    if (onlyIncomplete) {
                        return !task.completada && component;
                    }

                    return component;
                })
        );

    return (
        <Container>
            <Row>
                <CheckBox
                    label="Somente incompletas"
                    name="incompleteFilter"
                    checked={onlyIncomplete}
                    onChange={() => setOnlyIncomplete(!onlyIncomplete)}
                />
                <Row>
                    <CheckBox
                        label="Limite por data"
                        name="deadlineFilter"
                        checked={deadlineActive}
                        onChange={() => setDeadlineActive(!deadlineActive)}
                    />
                    <Input
                        name="deadline"
                        value={deadline}
                        disabled={!deadlineActive}
                        onChange={e => setDeadline(e.target.value)}
                        type="date"
                    />
                </Row>
            </Row>
            <ListContainer>
                {renderTasksList()}
                <AddCardButton onClick={() => navigate('/tarefas/criar')} />
            </ListContainer>
        </Container>
    );
}

export default TasksDashboard;
