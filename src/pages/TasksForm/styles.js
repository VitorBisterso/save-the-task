import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    & > label:first-child {
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3rem;

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 30%;

    button {
        margin-top: 1.5rem;
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`;
