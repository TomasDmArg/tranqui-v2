import React from "react";
import { Image } from '@mantine/core';
import { HeaderResponsive } from '../components/Header';

export default function Page(){
    return(
        <React.Fragment>
            <HeaderResponsive links={
            [
                { link: '/login', label: 'Iniciar sesión' },
                { link: '/register', label: 'Registrarse' },
                { link: '/professionals', label: 'Para profesionales' },
            ]
            } />
            <h1>Sobre Tranqui</h1>
            <p>Tranqui App es una herramienta para la prevención del suicidio, que apunta al acompañamiento en crisis y a la psicoeducación sobre esta problemática. Por eso, está pensada para ser utilizada por personas que están atravesando esta situación, familiares, amigxs, profesionales de salud, docentes, entre otros.</p>
            <p>Todo el contenido de Tranqui App ha sido desarrollado siguiendo las recomendaciones de la Organización Mundial de la Salud, el Ministerio de Salud de la Nación Argentina, UNICEF, y de asociaciones nacionales e internacionales que se dedican a la prevención del suicidio -International Association for Suicide Prevention, Fundación Salud Mental España, y American Association of Suicidology-.</p>
            <p>Toda la información personal que los usuarios guarden en la app es confidencial y se encuentra encriptada.</p>
            <hr></hr>
            <p>Mg. Aixa Galarza. Facultad de Psicología. Universidad Nacional de Mar del Plata.</p>
            <hr></hr>
            <p>Lic. Santiago González. Jefe de Salud Mental de la Municipalidad de General Pueyrredón.</p>
            <hr></hr>
            <p>Est. Dario Funes. Est. Lucas Funes. Prof. Pablo Abdala Achaval. E.E.S.T. N°5 &ldquo;Amancio Williams&ldquo; Mar del Plata.</p>
            <hr></hr>
            <Image
                width={140}
                src="eestn5.png"
                alt="logo escuela"
            />
            <Image
                width={300}
                src="facultad-psicologia.png"
                alt="facultad psicologia"
            />
            <Image
                width={140}
                src="salud-mgp.png"
                alt="salud mgp"
            />
            <Image
                width={600}
                src="bsas.jpg"
                alt="bsas"
            />
        </React.Fragment>
    )
}