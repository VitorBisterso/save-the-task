import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './styles';

function Icon({ width, img, onClick }) {
    return <StyledIcon onClick={onClick} width={width} src={img} />;
}

Icon.propTypes = {
    width: PropTypes.number.isRequired,
    img: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Icon;
