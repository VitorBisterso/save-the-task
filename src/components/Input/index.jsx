import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './styles';

function Input(props) {
    const { name, value, hasError, onChange, onBlur, type } = props;

    const theme = hasError ? 'red' : '#8692a6';

    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            theme={theme}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    type: PropTypes.string,
};

Input.defaultProps = {
    onBlur: () => undefined,
    type: 'text',
};

export default Input;
