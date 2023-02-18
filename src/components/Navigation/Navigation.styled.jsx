import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    color: #713333;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:not(:last-child) {
        margin-right: ${props => props.theme.spacing(6)};
    }
    &:hover:not(.active),
    &:focus:not(.active) {
        color: #1172c0;
    }
    &.active {
        text-decoration: underline #713333;
    }
`;