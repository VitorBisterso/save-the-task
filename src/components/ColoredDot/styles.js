import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Dot = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${props => props.color};
    border: 1px solid var(--COLOR-BLACK);
`;
