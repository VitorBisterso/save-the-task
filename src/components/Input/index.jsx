import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './styles';

function Input(props) {
    const { name, value, hasError, onChange, onBlur, type, disabled } = props;

    const theme = hasError ? 'red' : '#8692a6';

    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            theme={theme}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    onBlur: () => undefined,
    type: 'text',
    disabled: false,
    hasError: false,
};

export default Input;
