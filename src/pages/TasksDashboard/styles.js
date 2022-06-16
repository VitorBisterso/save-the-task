import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;

    & > label {
        max-width: 200px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & > input {
        margin-left: 30px;
    }
`;

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.5rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
    }
`;
