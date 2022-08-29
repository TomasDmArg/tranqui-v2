import React from 'react';
import Head from "next/head"
import Faq from '../components/faq';
import Faq2 from '../components/Faq2';
export default function HeroText() {
    return (
        <React.Fragment>
            <Head>
                <title>Más información</title>
            </Head>
            <main>
               <h1>Mas Información</h1>
               <h2>mitos sobre el suicidio</h2>
               <h4>Existen una serie de creencias erróneas, equivocadas, sobre el suicidio y las personas que lo padecen,
                que se trasmiten como “verdades” pero que no poseen veracidad científica. Estas creencias, 
                denominadas mitos, impactan directamente obstaculizando las acciones de prevención, detección e
                intervención que se podrían realizar tanto desde la sociedad en general, como los profesionales de la
                salud, docentes, etc. Por ello, es fundamental erradicarlos y la mejor manera es a través de información 
                basada en los hallazgos científicos de la suicidología.</h4>
                <Faq/>
            </main>
            <main>
                <h2>Factores protectores, de riesgo y precipitantes</h2>
                <Faq2/>
            </main>
            <main>
                <h2>Señales de Alerta</h2>
                <h4>Signos y características detectables que indicarían elevado riesgo de intento de suicidio en el tiempo próximo, es decir que pueden señalar con cierto grado de probabilidad el desenlace inminente de una crisis suicida.</h4>
                <Faq3/>
            </main>
            <main>
                <h2>A Dónde ir</h2>
                <Faq4/>
            </main>
        </React.Fragment>
    )
}