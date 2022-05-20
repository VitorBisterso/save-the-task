import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TasksApi from '../../../redux/api/tasks';

import TasksForm from '..';

function TasksCreateForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <TasksForm
            pageTitle="Criando uma tarefa"
            task={{}}
            onFormSubmit={values => {
                dispatch(
                    TasksApi.createTask({
                        ...values,
                    })
                );
                navigate('/');
            }}
        />
    );
}

export default TasksCreateForm;
