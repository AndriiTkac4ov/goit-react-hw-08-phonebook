import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { logoutAction } from 'redux/auth/auth.slice';
import { authLogoutThunk } from 'redux/auth/auth.thunk';

const UserMenu = ({ mail }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{mail}</p>
            {/* <button type="button" onClick={()=>dispatch(logoutAction())}>Log out</button> */}
            <button type="button" onClick={()=>dispatch(authLogoutThunk())}>Log out</button>
        </div>
    )
}

UserMenu.propTypes = {
    mail: PropTypes.string.isRequired,
}

export default UserMenu;