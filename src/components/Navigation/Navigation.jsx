import { NavItem } from './Navigation.styled';

export const Navigation = () => {
    return (
        <nav>
            {/* <NavItem to='/'>Home</NavItem> */}
            <NavItem to='/register'>Register</NavItem>
            <NavItem to='/login'>Login</NavItem>
            <NavItem to='/contacts'>Contacts</NavItem>
        </nav>
    )
}