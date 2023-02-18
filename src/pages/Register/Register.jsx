import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "nanoid";
// import { selectContacts } from "redux/selectors";
// import * as contactsOperations from "redux/contacts/contactsOperations";
import Loader from "components/Loader/Loader";
import {
    RegisterGroup,
    RegisterTitle,
    Form,
    LabelField,
    InputField,
    ButtonAdding,
} from "./Register.styled";

const initialState = {
    name: '',
    email: '',
    password: '',
}

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState(initialState);
    // const [isPassword, setIsPassword] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;

        setValues(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(values);

        try {
            setIsLoading(true);
            await axios.post('https://connections-api.herokuapp.com/users/signup', values);
            setIsLoading(false);
            toast.success('Congratulate! You have just become the owner of Phonebook!');
        } catch (error) {
            console.log(error);
            toast.error('Houston! We have a problem!');
        }

        setValues(initialState);
    }

    return (
        <RegisterGroup>
            {isLoading && <Loader />}

            <RegisterTitle>Please Sign In Your Phonebook</RegisterTitle>

            <Form onSubmit={handleSubmit}>
                <LabelField>
                    Name
                    <InputField
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        autoComplete="off"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </LabelField>

                <LabelField>
                    Email
                    <InputField
                        type="email"
                        name="email"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        autoComplete="off"
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
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        autoComplete="off"
                        placeholder="Name123456"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                </LabelField>

                {/* <ButtonAdding type="button" onClick={() => setIsPassword(prev => !prev)}>Show Password</ButtonAdding> */}
                <ButtonAdding type="submit">Sign In</ButtonAdding>
            </Form>
        </RegisterGroup>
    )
}

export default Register;