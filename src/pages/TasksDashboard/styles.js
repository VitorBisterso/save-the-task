import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    justify-items: center;

    div {
        width: 250px;
        height: 250px;
        background-color: var(--COLOR-PURPLE);
    }
`;
