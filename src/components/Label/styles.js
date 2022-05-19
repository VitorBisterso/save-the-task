import styled from 'styled-components';

const StyledLabel = styled.label`
    color: ${props => props.color};
    font-size: ${props => props.theme.size};
    font-weight: ${props => (props.theme.bold ? 'bold' : 500)};
`;

export default StyledLabel;
