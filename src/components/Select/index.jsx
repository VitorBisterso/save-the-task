import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './styles';

function Select({ name, options, onChange }) {
    return (
        <StyledSelect name={name} onChange={onChange}>
            {options.map(opt => {
                const { value, label } = opt;
                return (
                    <option key={value} value={value}>
                        {label}
                    </option>
                );
            })}
        </StyledSelect>
    );
}

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
    name: '',
};

export default Select;
