import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from "../AuthRoutes/PublicRoute";
import { PrivateRoute } from "../AuthRoutes/PrivateRoute";
import { Layout } from '../Layout/Layout';
import NotFoundPage from 'pages/NotFound/NotFound';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
// const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="" element={<PublicRoute />}>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path='contacts' element={<ContactsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;