import { createStyles, Title, Text, Button, Container, Collapse } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { Dots } from '../components/Dots';
import { HeaderResponsive } from '../components/Header';
import { useState } from 'react';

import React from 'react';

export default function Page(){
    const [opened, setOpened] = useState(false);
    const [opened1, setOpened1] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const [opened3, setOpened3] = useState(false);
    const [opened4, setOpened4] = useState(false);
    const [opened5, setOpened5] = useState(false);
    const [opened6, setOpened6] = useState(false);
    const [opened7, setOpened7] = useState(false);
    const [opened8, setOpened8] = useState(false);
    const [opened9, setOpened9] = useState(false);
    const [opened10, setOpened10] = useState(false);
    const [opened11, setOpened11] = useState(false);
    const [opened12, setOpened12] = useState(false);
    const [opened13, setOpened13] = useState(false);
    const [opened14, setOpened14] = useState(false);
    const [opened15, setOpened15] = useState(false);
    const [opened16, setOpened16] = useState(false);
    const [opened17, setOpened17] = useState(false);
    const [opened18, setOpened18] = useState(false);

    return (
        <React.Fragment>
            <HeaderResponsive links={
        [
          { link: '/login', label: 'Iniciar sesión' },
          { link: '/register', label: 'Registrarse' },
          { link: '/professionals', label: 'Para profesionales' },
        ]
      } />
            <Head>
                <title>Tranqui</title>                
            </Head>
            <main>
            <h1>Conozco a alguien</h1>
            <h3>Me preocupa alguien</h3>
            <p>Acompañar a un familiar, un amigx, una pareja o una persona allegada que tiene pensamientos de suicidio siempre es duro y difícil.
            Vamos a tratar de brindarte información para que puedas comprender más la situación y te sientas más orientadx sobre qué hacer y qué no hacer antes de un intento suicida y después de él (tanto en el hospital como al alta, o una vez de regreso a casa).</p>
            <h3>¿Qué le está pasando?</h3>
            <p>El suicidio aparece como una forma de resolver un problema y poner fin a un dolor que se experimenta como interminable, incontrolable e intolerable. No se ve luz al final del túnel, se sienten solos, alejados, creen que nadie puede ayudarlos, y de hecho sienten que son una molestia para los demás, una carga. Sienten que nunca nada va a cambiar.
            Es importante entender que aunque en el momento de crisis no lo parezca, estos sentimientos de angustia, de desesperanza, de soledad y desesperación no duran para siempre. Las crisis no son permanentes.</p>
            <Button className="collapse-btn"  onClick={() => setOpened((o) => !o)}>
                Sobre el suicidio
            </Button>
            <Collapse className="collapse" in={opened} transitionDuration={500} transitionTimingFunction="linear">
                <ul>
                <li>El suicidio NO es un problema individual que solo afecta a una persona, a una familia o a una comunidad.
                </li>
                <li>De acuerdo con la Organización Mundial de la Salud, el suicidio es un grave problema de salud pública que resulta en casi 1 millón de muertes prevenibles al año.
                </li>
                <li>
                En nuestro país es la segunda causa de fallecimiento de jóvenes entre 15 y 24 años.
                </li>
                <li>
                Quienes más consuman el suicidio son los varones. Mientras que las mujeres lo intentan con más frecuencia.
                </li>
                </ul>
            </Collapse>
            <h3>
                Mitos sobre las personas con ideas sobre el suicidio
            </h3>
            <p>En toda sociedad existen mitos sobre diferentes temas. Son creencias erróneas, falsas, que se transmiten como si fueran verdades científicas y que pueden tener graves consecuencias y dificultar la prevención de un intento suicido. Por eso, es fundamental desterrar estos mitos para poder comprender y ayudar a una persona con pensamientos sobre el suicidio:</p>
            <Button className="collapse-btn"  onClick={() => setOpened1((o) => !o)}>
                Mito 1: Preguntar a una persona si está pensando en suicidarse, puede incitarle a hacerlo
            </Button>
            <Collapse className="collapse" in={opened1} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Está demostrado que preguntar y hablar con la persona sobre la presencia de pensamientos suicidas, disminuye el riesgo de cometer el acto. Hablar siempre genera alivio en la persona que está sufriendo.
                Es muy importante acercarse con una actitud de comprensión y de escucha, para que sienta tu deseo de ayudar y tu preocupación. No intentes discutir o minimizar estas ideas. Dejalx hablar de lo que le pasa.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened2((o) => !o)}>
                Mito 2: La persona que expresa su deseo de acabar con su vida nunca lo hará
            </Button>
            <Collapse className="collapse" in={opened2} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                La gran mayoría de los casos en que las personas han intentado suicidarse, habían manifestado de alguna manera su intención de hacerlo con palabras, amenazas, gestos o cambios de conducta.
                Estas verbalizaciones o gestos SIEMPRE indican que esa persona está sufriendo, necesita ayuda y no sabe cómo pedirla. Es muy importante que NUNCA sean consideradas como un simple llamado de atención, chantaje o manipulación de la persona para la obtención de un fin determinado.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened3((o) => !o)}>
                Mito 3: La persona que se quiere suicidar no lo dice
            </Button>
            <Collapse className="collapse" in={opened3} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Solamente un pequeño número de suicidios se produce sin aviso. De cada 10 personas que se suicidan, 9 lo expresaron claramente o dejaron entrever sus intenciones de acabar con su vida.
                Todas las amenazas de autolesión deben ser tomadas en serio. Por eso, si detectás una señal de alerta directa o indirecta y creés que la persona que te preocupa se encuentra en una situación de riesgo, es importante que le preguntes sobre ello.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened4((o) => !o)}>
                Mito 4: El suicidio es impulsivo y la mayoría de los suicidas no avisa
            </Button>
            <Collapse className="collapse" in={opened4} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                El suicidio puede ser el resultado de un acto impulsivo repentino o de una planificación muy cuidadosa. En ambos casos, casi siempre existen señales directas o indirectas, mensajes, gestos que advierten el riesgo de un intento de suicidio.
                Es erróneo pensar que no podemos hacer nada para prevenir la conducta suicida. El suicidio y/o sus intentos, en muchas ocasiones, se pueden prevenir y es por ello muy importante que aprendamos a detectar las señales de alerta de riesgo.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened5((o) => !o)}>
                Mito 5: Solo las personas con probleas graves se suicidan
            </Button>
            <Collapse className="collapse" in={opened5} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                El suicidio es multicausal. Muchos problemas pequeños pueden llevar al suicidio. Nunca menosprecies ni compares. Lo que para algunos puede ser un problema simple o sin importancia, para otros puede ser algo catastrófico.
                </p>
            </Collapse>
            <h3>¿Cómo saber que está atravesando una crisis?</h3>
            <Button className="collapse-btn"  onClick={() => setOpened6((o) => !o)}>
                Señales de alerta
            </Button>
            <Collapse className="collapse" in={opened6} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Lx veo con mucha bronca, impotencia, vergüenza, tristeza.
                </li>
                <li>
                Hace tiempo está pasando por una situación muy difícil y siente que ya no tiene salida.  
                </li>
                <li>
                Está consumiendo excesivamente alcohol o drogas.
                </li>
                <li>
                Abandonó muchas actividades que le gustaba hacer.
                </li>
                <li>
                No quiere estar con nadie, se encierra en sí mismo.  
                </li>
                </ul>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened7((o) => !o)}>
                Señales de máximo riesgo
            </Button>
            <Collapse className="collapse" in={opened7} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Me dijo que tiene pensamientos sobre suicidarse, de que su vida no vale la pena, que es una carga para los demás. 
                </li>
                <li>
                Dejó mensajes en las redes sociales sobre quitarse la vida o cartas de despedida.
                </li>
                <li>
                De repente parece estar muy tranquilx cuando previamente había presentado una gran agitación.    
                </li>
                <li>
                Regaló muchas de sus cosas.    
                </li>
                <li>
                Se autolesiona (por ejemplo, cortes o quemaduras).
                </li>
                <li>
                Tuvo un intento de suicidio.    
                </li>
                </ul>
            </Collapse>
            <h3>¿Qué puedo hacer?</h3>
            <p>En primer lugar, es importante que sepas que a las personas que están atravesando estas crisis les es muy difícil saber cómo pedir ayuda. Te damos algunos TIPS para facilitarte cómo acercarte a hablar y escuchar a la persona que te preocupa:
            <ul>
            <li>
            Es importante que te acerques con una actitud de ayuda y comprensión. Aunque te resulte difícil, tratá de no enojarte, ni asustarte mientras estén hablando, no juzgues ni des sermones sobre lo que pueda decir o hacer.
            </li>
            <li>
            Conservar la calma. Transmitir tranquilidad, tanto con la comunicación verbal como corporal.
            </li>
            <li>
             No desafiar, no despreciar, minimizar, ni desoír las amenazas.
            </li>
            <li>
           No repetir frases hechas ni dar consejos simplistas (por ejemplo: &ldquo;con todo lo que tenés…&ldquo;, &ldquo;con lo bonita que es la vida&ldquo;, etc.). 
            </li>
            <li>
            Decile que estás dispuestx a escuchar lo que tiene para decir. Dale el tiempo que necesite hasta que termine de hablar.  
            </li>
            </ul>
            </p>
            <Button className="collapse-btn"  onClick={() => setOpened8((o) => !o)}>
                Algunas cosas que podés decir y hacer
            </Button>
            <Collapse className="collapse" in={opened8} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                &ldquo;Si no pudiste encontrar una solución, no quiere decir que no la haya, sino que ahora te cuesta verla. Hay personas que te pueden ayudar a pensar alternativas: profesionales, familia o amigxs. Con el tiempo y su ayuda, vas a poder ver las cosas de una forma distinta&ldquo;.
                </li>
                <li>
                Recordale que aunque ahora no se siente así, las cosas cambian. Este malestar intenso va a disminuir. VA A PASAR. EL SUICIDIO ES ALGO PERMANENTE ANTE ESTADOS DE CRISIS QUE SON TEMPORALES.  
                </li>
                <li>
                Evitar el consumo de alcohol o drogas, porque solamente va a empeorar las cosas
                </li>
                <li>
                Recordale que hablar siempre lx va a aliviar
                </li>
                <li>
                Sugerile que se descargue la APP Tranqui para que pueda tener la información necesaria y saber cómo ayudarlx.
                </li>
                <li>
                Utilizá el plan de seguridad
                </li>
                <li>
                Quitar cualquier medio que pueda usar para hacerse daño.
                </li>
                <li>
                Nunca prometas secreto, es importante que compartas la situación y busques ayuda con otras personas cercanas. En estos casos no hay que actuar solx, sino intentar armar una red de apoyo.
                </li>
                </ul>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened9((o) => !o)}>
            Cuando tiene pensamientos suicidas
            </Button>
            <Collapse className="collapse" in={opened9} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Tomarse en serio cualquier manifestación, amenaza o sospecha de conducta suicida.
                </li>
                <li>
                Valorar el riesgo, en base a la información sobre los factores de riesgo y el análisis de la situación concreta.    
                </li>
                <li>
                En estas conversaciones tener en cuenta: cómo se siente, qué ideas suicidas tiene, si tiene un plan, si ha escrito alguna nota, etc. Toda esta información es muy valiosa para valorar la gravedad del riesgo suicida: cuantas más respuestas tenga sobre dónde, cómo y cuándo, y más letales sean las condiciones del plan, más riesgo suicida, sobre todo si existe algún antecedente previo.
                </li>
                <li>
                Mostrar esperanza y posibilidades de superación de la situación con la ayuda oportuna.
                </li>
                <li>
                Retirar todo lo que pueda usar para autolesionarse.
                </li>
                <li>
                Controlar el acceso a la medicación, así como el consumo (por exceso o defecto) de la receta.
                </li>
                <li>
                Buscar ayuda profesional: servicios de emergencias, hospital, centro de atención primaria o de salud mental. Tener siempre a mano los medios de contacto con todos ellos.
                </li>
                </ul>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened10((o) => !o)}>
                Después de un intento de suicidio
            </Button>
            <Collapse className="collapse" in={opened10} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <Button className="collapse-btn"  onClick={() => setOpened11((o) => !o)}>
                En el hospital
            </Button>
            <Collapse className="collapse" in={opened11} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Proporcionar toda la información posible a los profesionales de salud, sin ocultar datos por posibles prejuicios hacia la conducta suicida. Esta información puede referirse a: intentos suicidas previos, antecedentes suicidas familiares, posibles trastornos mentales y sus tratamientos actuales, información sobre las circunstancias del intento, etc.    
                </li>
                <li>
                Aceptar lo ocurrido, no culpabilizar por haber cometido el acto suicida. Tratar el hecho de manera directa y empática.
                </li>
                <li>
                No dramatizar ni minimizar la situación generada. Es importante que traten de mantenerse tranquilos.
                </li>
                <li>
                Analizar y abordar en familia las posibles causas, soluciones y roles entre los diferentes miembros y minimizar así posibles repeticiones futuras. No culpabilizar.
                </li>
                </ul>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened12((o) => !o)}>
                Al alta del hospital
            </Button>
            <Collapse className="collapse" in={opened12} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Conocer el proceso que se ha seguido hasta el alta y las condiciones en las que el paciente abandona el hospital.  
                </li>
                <li>
                Acordar con los profesionales de salud qué deben hacer y qué cosas deben evitar una vez luego del alta.
                </li>
                <li>
                Saber el plan de tratamiento y la forma de colaborar en él.
                </li>
                <li>
                Informarse sobre los recursos de atención disponibles tras el alta.
                </li>
                </ul>
            </Collapse><br/>    
            <Button className="collapse-btn"  onClick={() => setOpened13((o) => !o)}>
                De regreso a casa
            </Button>
            <Collapse className="collapse" in={opened13} transitionDuration={300} transitionTimingFunction="linear">
                <ul>
                <li>
                Minimizar el acceso a medios que puedan suponer un riesgo de autolesión.  
                </li>
                <li>
                No culpabilizar ni represaliar. No humillar o menospreciar.
                </li>
                <li>
                Poner en práctica las acciones recomendadas por los profesionales de salud.
                </li>
                <li>
                Ponerse a disposición del familiar para la ayuda que pueda necesitar en su proceso de recuperación en general y en su Plan de Seguridad en particular.
                </li>
                <li>
                Ir poco a poco. No esperar soluciones mágicas. Es necesario mantener las acciones preventivas en el tiempo.
                </li>
                <li>
                Facilitar tareas y actividades, apoyo en el retorno al trabajo o la escuela y en la recuperación de la vida social.
                </li>
                <li>
                No subestimar el riesgo de suicidio pero tampoco sobreestimarlo ni vivir pendiente de él. Intentar llevar una vida lo más normalizada posible.
                </li>
                </ul>
            </Collapse>
                </ul>
            </Collapse>
            <p>
            Todo esto provoca una gran tensión y desgaste físico, psicológico y emocional en las personas implicadas. No pienses que sos la única persona que puede ayudar o que mejor lo puede hacer. Es importante que te cuides, repartir esfuerzos y mantener el espacio vital propio. En caso de ser necesario, vos también podés para pedir atención ayuda.
            </p>
            <h3>¿Cómo me cuido yo? - Mi plan de seguridad</h3>
            <p>
            El objetivo del Plan de Seguridad es ayudar a la persona a superar la crisis. Para poder hacerlo, se identifican personas, lugares, ideas o acciones que facilitan la superación de la ideación suicida propia o ajena.
            Aunque en general está dirigido a las personas con riesgo suicida, también es importante que las personas como vos que estén ayudando a alguien en riesgo, elaboren su propio Plan de Seguridad para identificar estrategias para manejar la situación y contactos a los que podés acudir.
            </p>
            <Button className="collapse-btn"  onClick={() => setOpened14((o) => !o)}>
                Señales de alerta
            </Button>
            <Collapse className="collapse" in={opened14} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Pensá en las circunstancias que te llevaron a tener ideas suicidas o sentir ganas de hacerte daño.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened15((o) => !o)}>
                Actividades que puedo hacer solo para no pensar
            </Button>
            <Collapse className="collapse" in={opened15} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Anotá actividades que podés hacer solx y te sirven para distraerte cuando te sentís mal, para disminuir el malestar, o tranquilizarte. Puede ser alguna actividad física, salir a pasear al aire libre, escuchar música, jugar algún juego, ordenar, etc.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened16((o) => !o)}>
                Con quiénes puedo hablar para distraerme
            </Button>
            <Collapse className="collapse" in={opened16} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Identificá cuáles son esas personas de tu entorno que te pueden ayudar a distraerte cuando te sentís mal.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened17((o) => !o)}>
                Con quiénes puedo hablar de lo que me pasa
            </Button>
            <Collapse className="collapse" in={opened17} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Anotá las personas de confianza –profesionales, familiares, amigxs- con las que podés hablar honestamente de lo que te está pasando en el momento de crisis. Es importante que les avises que los vas a llamar para que te ayuden en esta situación.
                </p>
            </Collapse><br/>
            <Button className="collapse-btn"  onClick={() => setOpened18((o) => !o)}>
                Listado de números de asistencia en mi ciudad
            </Button>
            <Collapse className="collapse" in={opened18} transitionDuration={300} transitionTimingFunction="linear">
                <p>
                Armá el listado de los números de emergencia a los que podés llamar en caso que los pasos anteriores no hayan servido para manejar la crisis.
                Para ver listado de dispositivos de atención de salud mental en Gral. Pueyrredón, entra a la sección de &ldquo;Más Información&ldquo;.
                </p>
            </Collapse>
            </main>
        </React.Fragment> 
    )
}