import styled from 'styled-components';

export const PhonebookHeader = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    min-height: ${props => props.theme.spacing(4.5)};
    padding: 12px 84px;
    color: #ffffff;
    
    background-color: darkslateblue;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;