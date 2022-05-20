import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    border: 1px solid ${props => props.theme};
    border-radius: 5px;
    padding: 0.5em;
    margin-top: 0.5em;
    resize: none;
    height: 150px;
`;

export default StyledTextArea;
