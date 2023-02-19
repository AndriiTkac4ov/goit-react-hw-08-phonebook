import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { selectProfileToken } from 'redux/profile/profile.selector';
import { getProfileThunk } from 'redux/profile/profile.thunk';
import UserMenu from '../UserMenu/UserMenu';
import {
    HeaderNav,
    NavItem,
} from './Navigation.styled';

export const Navigation = () => {
    const dispatch = useDispatch();

    const token = useSelector(selectAuthToken);
    const profile = useSelector(selectProfileToken);

    useEffect(() => {
        if (token) {
            dispatch(getProfileThunk());
        }
    }, [token, dispatch]);
    
    return (
        <HeaderNav>
            {token && profile ?
                <>
                    {/* <NavItem to='/contacts'>Contacts</NavItem> */}
                    <UserMenu mail={profile.email} />
                </> :
                <>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/register'>Register</NavItem>
                    <NavItem to='/login'>Log In</NavItem>
                </>
            }
        </HeaderNav>
    )
}