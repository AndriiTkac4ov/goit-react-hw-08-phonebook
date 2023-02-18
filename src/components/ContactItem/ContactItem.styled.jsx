import styled from 'styled-components';

export const ContactsItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child){
        margin-bottom: ${props => props.theme.spacing(1)};
    }
`;

export const ContactName = styled.p`
    margin: 0;
    font-size: ${props => props.theme.spacing(2)};
    line-height: 1.5;
`;

export const ButtonDeleting = styled.button`
    padding: 4px 24px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 500;
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    cursor: pointer;
    background: burlywood;
    color: honeydew;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background: chocolate;
        color: springgreen;
        border: 1px solid springgreen;
        transform: scale(1.1);
    }
`;