import React from 'react';
import { HeaderResponsive } from '../components/Header';
import { Button} from '@mantine/core';
import { Image } from '@mantine/core';
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons';

export default function Page() {
  return(
    <React.Fragment>
        <HeaderResponsive links={
        [
          { link: '/login', label: 'Registrarse/Iniciar sesión' },
          { link: '/professionals', label: 'Para profesionales' },
        ]
      } />
        <h1>Marco legal y normativo argentino</h1>
        <h2>Ley Nacional de prevencion del suicidio N°27.130</h2>
        <Button href="/Ley_27130.pdf" component="a" rel="noopener noreferrer " target='_blank'>Ver mas!</Button>
        <h2>Ley Nacional de salud mental N°26.667</h2>
        <Button href="/Ley_26667.pdf" component="a" rel="noopener noreferrer" target='_blank'>Ver Mas!</Button>
        <h1>Delimitaciones conceptuales</h1>
        <Image
            src="/"
        />
        <Accordion
          chevron={<IconPlus size={16} />}
          styles={{
          chevron: {
            '&[data-rotate]': {
              transform: 'rotate(45deg)',
            },
          },
        }}
      >
        {/* <Accordion.Item /> components */}
      </Accordion>

      <h1>Cómo evaluar el riesgo de suicidio</h1>
      <p>Los hallazgos de la evaluación basada en la evidencia (EBA) en suicidología indican la importancia de comenzar siempre indagando la presencia de ideaciones suicidas, su frecuencia, contenido y duración, para luego abordar los temas y áreas más sensibles, como por ejemplo planeación, antecedentes de intento de suicidio de la persona y su familia, todo lo relativo a dicho plan o intento, comportamientos asociados a la capacidad adquirida para suicidarse (por ejemplo, presencia de autolesiones no suicidas - NSSI) (Nock, Wedig, Janis & Deliberto, 2008). Asimismo, es necesario indagar la presencia de factores protectores, de riesgo y desencadenantes. Esta evaluación debe realizarse a través de una entrevista individual, en un espacio de confianza y calidez. También se recomienda incluir otro tipo de técnicas de evaluación como cuestionarios psicológicos, para lograr un abordaje multimétodo.
         De forma complementaria, es necesario tener una entrevista con familiares y/o allegados para conocer su percepción de la situación y el estado general de la persona en crisis, así como realizar intervenciones concretas dirigidas a brindar información y orientar a la red de apoyo para el acompañamiento.</p>
      <p>Es muy importante mantener una determinada actitud cuando se entrevista a alguien con pensamientos suicidas:</p>
      <ul>
        <li>Ser comprensivo, cariñoso, empático, validar la experiencia y generar un clima de confianza.</li>
        <li>Nunca juzgar la conducta, no estigmatizar, no atemorizarse, ni enojarse.</li>
        <li>No minimizar ni maximizar el riesgo hasta finalizar la evaluación y determinar cuáles son las intervenciones más adecuadas.</li>
        <li>Recordar que preguntarle a una persona con pensamientos y comportamientos suicidas sobre el tema, no aumenta el riesgo de suicidio, siempre que mantengamos una actitud de escucha y comprensión.</li>
      </ul>
      <p>Para profundizar esta información se recomienda revisar:</p>
      <ul>
        <li><a href="Lineamientos-Generales.pdf">Lineamientos generales para la comprensión, detección y prevención (UBA, 2016).</a></li>
        <li><a href="Clinica-Prevencion.pdf">Guía de Práctica Clínica de Prevención y Tratamiento de la Conducta Suicida (Ministerio de Sanidad y Política Social, España, 2012).</a></li>
      </ul>
    </React.Fragment>
  )
}