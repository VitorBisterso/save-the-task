import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import TasksApi from '../../../redux/api/tasks';

import TasksForm from '..';

function TasksEditForm() {
    const { id: categoryId } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { selectedTask } = useSelector(state => state.tasksReducer);

    const [activeTask, setActiveTask] = useState({});

    useEffect(() => {
        dispatch(TasksApi.fetchTaskById(categoryId));
    }, []);

    const usePrevious = value => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };
    const previous = usePrevious({ selectedTask });
    useEffect(() => {
        if (previous && previous.selectedTask !== selectedTask) {
            setActiveTask(selectedTask);
        }
    }, [selectedTask]);

    const hasTask = Object.keys(activeTask).length !== 0;
    return (
        hasTask && (
            <TasksForm
                pageTitle={`Editando a tarefa "${activeTask.titulo}"`}
                task={activeTask}
                onFormSubmit={values => {
                    dispatch(
                        TasksApi.updateTask({
                            id: activeTask.id,
                            ...values,
                        })
                    );
                    navigate('/');
                }}
            />
        )
    );
}

export default TasksEditForm;
