import React from 'react';
import { Link } from 'react-router-dom';

import logout from '../../assets/img/logout.png';

import { Container, Links } from './styles';

function Menu() {
    return (
        <Container>
            <h1>
                <Link to="/">Save the task</Link>
            </h1>
            <Links>
                <Link to="/">Tarefas</Link>
                <Link to="/categorias">Categorias</Link>
                <Link to="/logout">
                    Sair <img alt="logout" src={logout} />
                </Link>
            </Links>
        </Container>
    );
}

export default Menu;
