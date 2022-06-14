import React from 'react';
import { useDispatch } from 'react-redux';

import TasksApi from '../../../redux/api/tasks';

import TasksForm from '..';

function TasksCreateForm() {
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
            }}
        />
    );
}

export default TasksCreateForm;
