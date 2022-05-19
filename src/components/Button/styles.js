import styled from 'styled-components';

export default styled.button`
    cursor: pointer;
    border: none;
    background-color: var(--COLOR-PINK);
    color: white;
    font-weight: 700;
    border-radius: 5px;
    margin-bottom: 0.5em;
    padding: 1em 0;
    transition: ease-in-out 0.2s;

    &:hover {
        background-color: var(--COLOR-LIGHT-PINK);
    }
`;
