import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginThunk } from "redux/auth/auth.thunk";
import { selectAuthStatus } from "redux/auth/auth.selector";
import { toast } from "react-toastify";
import Loader from "components/Loader/Loader";
import {
    RegisterGroup,
    RegisterTitle,
    Form,
    LabelField,
    InputField,
    ButtonAdding,
} from "./Login.styled";

const initialState = {
    email: '',
    password: '',
}

const LoginPage = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState(initialState);
    // const [isPassword, setIsPassword] = useState(true);

    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setValues(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

    // ======
        // setIsLoading(true);
    // ======

        try {
            await dispatch(authLoginThunk(values)).unwrap();
            toast.success('Finally! We missed you.');
        } catch (error) {
            console.log(error);
            toast.error('Do not hurry! Something is wrong with your email or password.');
        }

        setValues(initialState);
    }

    return (
        <RegisterGroup>
            {status === 'loading' && <Loader />}

            <RegisterTitle>Please Log in Your Phonebook</RegisterTitle>

            <Form onSubmit={handleSubmit}>
                <LabelField>
                    Email
                    <InputField
                        type="email"
                        name="email"
                        required
                        autoComplete="on"
                        placeholder="name@email.com"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </LabelField>

                <LabelField>
                    Password
                    <InputField
                        // type={isPassword ? "password" : "text"}
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        placeholder="Name123456"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                </LabelField>

                {/* <ButtonAdding type="button" onClick={() => setIsPassword(prev => !prev)}>Show Password</ButtonAdding> */}
                <ButtonAdding type="submit">Log in</ButtonAdding>
            </Form>
        </RegisterGroup>
    )
}

export default LoginPage;