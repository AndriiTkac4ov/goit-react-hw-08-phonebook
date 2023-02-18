import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;