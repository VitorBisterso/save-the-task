import React from 'react';
import PropTypes from 'prop-types';

import { Dot } from './styles';

function ColoredDot({ color }) {
    return <Dot color={color} />;
}

ColoredDot.propTypes = {
    color: PropTypes.string.isRequired,
};

export default ColoredDot;
