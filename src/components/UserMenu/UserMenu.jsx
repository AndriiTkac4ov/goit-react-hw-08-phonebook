import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authLogoutThunk } from 'redux/auth/auth.thunk';
import { toast } from "react-toastify";


const UserMenu = ({ mail }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            const data = await dispatch(authLogoutThunk()).unwrap();
            console.log(data);
            navigate('/', { replace: true });
            toast.success('Good bye!');
        } catch (error) {
            console.log(error);
            toast.error('Something is wrong with log out!');
        }
    }

    return (
        <div>
            <p>{mail}</p>
            <button type="button" onClick={handleLogOut}>Log out</button>
        </div>
    )
}

UserMenu.propTypes = {
    mail: PropTypes.string.isRequired,
}

export default UserMenu;