import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles';

function Button(props) {
    const { text, onClick, submit } = props;

    return (
        <StyledButton type={submit ? 'submit' : 'button'} onClick={onClick}>
            {text}
        </StyledButton>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    submit: PropTypes.bool,
};

Button.defaultProps = {
    submit: false,
};

export default Button;
