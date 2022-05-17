import React from 'react';
import PropTypes from 'prop-types';

import ColoredDot from '../ColoredDot';

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
    Icon,
    Button,
} from './styles';

function TaskCard({ titulo, descricao, prioridade, categoria, completada }) {
    const { cor } = categoria;

    const renderCompleteButton = () =>
        completada ? (
            <Button>
                Desmarcar
                <img alt="check" src={checkIcon} />
            </Button>
        ) : (
            <Button>
                Completar
                <img alt="uncheck" src={uncheckIcon} />
            </Button>
        );

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
                    <Icon src={deleteIcon} />
                    <Icon src={editIcon} />
                </div>
                {renderCompleteButton()}
            </Footer>
        </Container>
    );
}

TaskCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    prioridade: PropTypes.string.isRequired,
    categoria: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        cor: PropTypes.string.isRequired,
    }).isRequired,
    completada: PropTypes.bool.isRequired,
};

export default TaskCard;
