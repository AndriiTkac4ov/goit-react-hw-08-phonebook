import styled from 'styled-components';

export const ProfileMenu = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
`;

export const ProfileEmail = styled.p`
    margin: 0 36px 0 0;
    font-size: ${props => props.theme.spacing(2.5)};
    font-weight: 700;
    line-height: 1.5;
    color: honeydew;
`;

export const LogOutButton = styled.button`
    padding: 4px 24px;
    font-size: ${props => props.theme.spacing(2.5)};
    font-weight: 700;
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(3)};
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