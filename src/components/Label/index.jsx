import React from 'react';
import PropTypes from 'prop-types';

import StyledLabel from './styles';

function Label(props) {
    const { text, size, color, bold } = props;

    return (
        <StyledLabel color={color} theme={{ bold, size }}>
            {text}
        </StyledLabel>
    );
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    bold: PropTypes.bool,
};

Label.defaultProps = {
    size: '16px',
    color: '#696f79',
    bold: false,
};

export default Label;
