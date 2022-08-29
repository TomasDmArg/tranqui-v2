import React from 'react';
import Head from "next/head"
import Faq from '../components/faq';
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
        </React.Fragment>
    )
}