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

    const {
        id,
        titulo,
        descricao,
        prioridade,
        categoria,
        dataLimite,
        completada,
    } = tarefa;
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

    const renderDeadline = () =>
        completada ? (
            <p>
                <b>Concluída</b>
            </p>
        ) : (
            <p>
                Concluir até: <b>{dataLimite}</b>
            </p>
        );

    return (
        <Container isCategoryActive={categoria.ativa}>
            <Header>
                <ColoredDot color={cor} />
                <Title isCompleted={completada} title={titulo}>
                    {titulo}
                </Title>
                <p>{prioridade}</p>
            </Header>
            <Description isCompleted={completada} title={descricao}>
                {descricao}
            </Description>
            {renderDeadline()}
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
        dataLimite: PropTypes.string.isRequired,
        categoria: PropTypes.shape({
            nome: PropTypes.string.isRequired,
            cor: PropTypes.string.isRequired,
            ativa: PropTypes.bool.isRequired,
        }).isRequired,
        completada: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskCard;
