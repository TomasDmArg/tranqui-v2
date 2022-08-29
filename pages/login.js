import React from 'react';
import Login from '../components/Login';
import { HeaderResponsive } from '../components/Header';

export default function Page() {
    return (
        <React.Fragment>
            <HeaderResponsive links={
                [
                    { link: '/register', label: 'Registrarse' },
                    { link: '/professionals', label: 'Para profesionales' },
                ]
            }/>
            <Login />
        </React.Fragment>
    );
}