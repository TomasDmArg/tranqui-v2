import React from "react";
import Head from "next/head";
import Faq from "../components/Faq";
import Faq2 from "../components/Faq2";
import Faq3 from "../components/Faq3";
import Faq4 from "../components/Faq4";
import { HeaderResponsive } from "../components/Header";

export default function HeroText() {
  return (
    <React.Fragment>
      <Head>
        <title>Más información</title>
      </Head>
      <HeaderResponsive
        links={[
          { link: "/login", label: "Registrarse/Iniciar sesión" },
          { link: "/professionals", label: "Para profesionales" },
        ]}
      />
      <main className="masinfo">
        <section className="masinfo--intro">
          <h1>Mas Información</h1>
          <h2>Mitos sobre el suicidio</h2>
          <p>
            Existen una serie de creencias erróneas, equivocadas, sobre el
            suicidio y las personas que lo padecen, que se trasmiten como
            &ldquo;verdades&ldquo; pero que no poseen veracidad científica.
            Estas creencias, denominadas mitos, impactan directamente
            obstaculizando las acciones de prevención, detección e intervención
            que se podrían realizar tanto desde la sociedad en general, como los
            profesionales de la salud, docentes, etc. Por ello, es fundamental
            erradicarlos y la mejor manera es a través de información basada en
            los hallazgos científicos de la suicidología.
          </p>
          <Faq />
        </section>
        <section>
          <h2>Factores protectores, de riesgo y precipitantes</h2>
          <Faq2 />
        </section>
        <section>
          <h2>Señales de alerta</h2>
          <p>
            Signos y características detectables que indicarían elevado riesgo
            de intento de suicidio en el tiempo próximo, es decir que pueden
            señalar con cierto grado de probabilidad el desenlace inminente de
            una crisis suicida.
          </p>
          <Faq3 />
        </section>
        <section>
          <h2>A dónde ir</h2>
          <Faq4 />
        </section>
      </main>
    </React.Fragment>
  );
}
