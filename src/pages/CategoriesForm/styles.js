import styled from 'styled-components';

export const Container = styled.form`
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

export const SelectColor = styled.input`
    border: 1px solid var(--COLOR-BLACK);
    border-radius: 5px;
    padding: 0 5px;
    background-color: transparent;
    margin-top: 0.5rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    label:last-child {
        margin-top: 20px;
    }
`;
