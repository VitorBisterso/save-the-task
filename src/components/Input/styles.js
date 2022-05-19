import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid ${props => props.theme};
    border-radius: 5px;
    padding: 1.2em;
    padding-right: 0;
    margin-top: 0.5em;
`;

export default StyledInput;
