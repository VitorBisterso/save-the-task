import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px dashed var(--COLOR-BLACK);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover > img {
        width: ${props => `${props.iconSize}px`};
    }
`;

export const PlusIcon = styled.img`
    transition: all 0.2s linear;
    width: ${props => `${props.iconSize}px`};
`;
