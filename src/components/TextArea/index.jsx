import React from 'react';
import PropTypes from 'prop-types';

import StyledTextArea from './styles';

function TextArea(props) {
    const { name, value, hasError, onChange, onBlur } = props;

    const theme = hasError ? 'red' : '#8692a6';

    return (
        <StyledTextArea
            name={name}
            value={value}
            theme={theme}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
};

TextArea.defaultProps = {
    onBlur: () => undefined,
};

export default TextArea;
