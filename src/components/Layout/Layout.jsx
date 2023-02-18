import { PhonebookHeader } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import Loader from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    return (
        <>
            <PhonebookHeader>
                <Navigation />
            </PhonebookHeader>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <ToastContainer />
        </>
    )
}