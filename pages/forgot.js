import React from 'react';
import { HeaderResponsive } from '../components/Header';

export default function Page() {
    return (
        <React.Fragment>
            <HeaderResponsive links={
                [   
                    { link: '/Login', label: 'Iniciar sesión' },
                    { link: '/register', label: 'Registrarse' },
                    { link: '/professionals', label: 'Para profesionales' },
                ]
            }/>
        </React.Fragment>
    );
}
