import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.5rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
    }
`;
