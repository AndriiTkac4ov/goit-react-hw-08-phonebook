import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

// import ContactForm from "../ContactForm/ContactForm";
// import Filter from "../Filter/Filter";
// import ContactList from "../ContactList/ContactList";
// import Loader from "../Loader/Loader";
// import { selectIsLoading} from "redux/selectors";
// import { useSelector } from "react-redux";
// import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='contacts' element={<Contacts />} />
        {/* <Application>
        <ApplicationTitle>Phonebook</ApplicationTitle>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
        </Application> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;