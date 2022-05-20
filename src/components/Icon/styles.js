import styled from 'styled-components';

export default styled.img`
    width: ${props => `${props.width}px`};
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
        width: ${props => `${props.width * 1.33}px`};
    }
`;
