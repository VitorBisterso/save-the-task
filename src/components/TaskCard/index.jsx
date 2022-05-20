import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TasksApi from '../../redux/api/tasks';

import ColoredDot from '../ColoredDot';
import Icon from '../Icon';

import deleteIcon from '../../assets/img/delete.png';
import editIcon from '../../assets/img/edit.png';
import checkIcon from '../../assets/img/check.png';
import uncheckIcon from '../../assets/img/uncheck.png';

import {
    Container,
    Header,
    Title,
    Description,
    Footer,
    Button,
} from './styles';

function TaskCard({ tarefa }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id, titulo, descricao, prioridade, categoria, completada } = tarefa;
    const { cor } = categoria;

    const renderCompleteButton = () => {
        const dispatchToggleEvent = () =>
            dispatch(
                TasksApi.updateTask({
                    ...tarefa,
                    completada: !completada,
                })
            );

        return completada ? (
            <Button onClick={() => dispatchToggleEvent()}>
                Desmarcar
                <img alt="check" src={checkIcon} />
            </Button>
        ) : (
            <Button onClick={() => dispatchToggleEvent()}>
                Completar
                <img alt="uncheck" src={uncheckIcon} />
            </Button>
        );
    };

    return (
        <Container>
            <Header>
                <ColoredDot color={cor} />
                <Title isCompleted={completada}>{titulo}</Title>
                <p>{prioridade}</p>
            </Header>
            <Description isCompleted={completada}>{descricao}</Description>
            <Footer>
                <div>
                    <Icon
                        onClick={() => {
                            dispatch(TasksApi.deleteTask(id));
                        }}
                        img={deleteIcon}
                        width={18}
                    />
                    <Icon
                        onClick={() => {
                            navigate(`/tarefas/${id}`);
                        }}
                        img={editIcon}
                        width={18}
                    />
                </div>
                {renderCompleteButton()}
            </Footer>
        </Container>
    );
}

TaskCard.propTypes = {
    tarefa: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        prioridade: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        categoria: PropTypes.shape({
            nome: PropTypes.string.isRequired,
            cor: PropTypes.string.isRequired,
        }).isRequired,
        completada: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskCard;
