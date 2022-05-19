import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 3rem;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 1.5rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
    }
`;

export const CategoryCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--COLOR-BLACK);
    border-radius: 5px;
    padding: 0 10px;
    width: 150px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        background-color: var(--COLOR-PINK);
        color: var(--COLOR-WHITE);
        border-color: var(--COLOR-PINK);
    }

    p {
        text-overflow: ellipsis;
        width: 65%;
        white-space: nowrap;
        overflow: hidden;
    }
`;