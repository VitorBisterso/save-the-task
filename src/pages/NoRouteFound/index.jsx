import React from 'react';

import notFound from '../../assets/img/notFound.png';

import { Container } from './styles';

function NoRouteFound() {
    return (
        <Container>
            <h1>Ih rapaz!</h1>
            <img alt="not found" src={notFound} />
            <h2>Acho que essa rota não existe hein...</h2>
        </Container>
    );
}

export default NoRouteFound;
