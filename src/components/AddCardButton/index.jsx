import React from 'react';
import PropTypes from 'prop-types';

import plusIcon from '../../assets/img/add.png';

import { Container, PlusIcon } from './styles';

function AddCardButton({ onClick, width, height, iconSize }) {
    return (
        <Container
            onClick={onClick}
            width={width}
            height={height}
            iconSize={iconSize * 1.33}
        >
            <PlusIcon src={plusIcon} iconSize={iconSize} />
        </Container>
    );
}

AddCardButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    iconSize: PropTypes.number,
};

AddCardButton.defaultProps = {
    width: '300px',
    height: '200px',
    iconSize: 48,
};

export default AddCardButton;
