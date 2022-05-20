import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input, Span } from './styles';

function CheckBox({ name, label, onChange, checked }) {
    return (
        <Label>
            {label}
            <Input
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <Span />
        </Label>
    );
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
};

CheckBox.defaultProps = {
    checked: false,
};

export default CheckBox;
