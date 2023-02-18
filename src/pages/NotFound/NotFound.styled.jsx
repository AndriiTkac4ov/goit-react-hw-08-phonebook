import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
    padding: 24px;
    text-align: center;
`;

export const NotFoundImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${props => props.theme.spacing(2)};
    max-width: 100%;
    height: auto;
`;

export const NotFoundText = styled.p`
    margin-bottom: ${props => props.theme.spacing(2)};
`;

export const NotFoundLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 8px;

    color: #713333;
    background-color: #fff4e0;
    border: 1px solid;
    border-color: #713333;
    border-radius: 6px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: #fff4e0;
        background-color: #1172c0;
        border-color: #1172c0;
    }
`;