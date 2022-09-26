import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: '1',
    image: '/add-outline.svg',
    label: 'Preguntar a una persona si está pensando en suicidarse, puede incitarle a hacerlo.',
    description: '',
    content: "Está demostrado que preguntar y hablar con la persona sobre la presencia de pensamientos suicidas, disminuye el riesgo de cometer el acto. Hablar siempre genera alivio en la persona que está sufriendo.Es muy importante acercarse con una actitud de comprensión y de escucha, para que sienta tu deseo de ayudar y tu preocupación. No intentes discutir o minimizar estas ideas. Dejalx hablar de lo que le pasa.",
  },

  {
    id: '2',
    image: '/add-outline.svg',
    label: 'La persona que expresa su deseo de acabar con su vida nunca lo hará.',
    description: '',
    content: "La gran mayoría de los casos en que las personas han intentado suicidarse, habían manifestado de alguna manera su intención de hacerlo con palabras, amenazas, gestos o cambios de conducta.Estas verbalizaciones o gestos SIEMPRE indican que esa persona está sufriendo, necesita ayuda y no sabe cómo pedirla. Es muy importante que NUNCA sean consideradas como un simple llamado de atención, chantaje o manipulación de la persona para la obtención de un fin determinado.",
  },

  {
    id: '3',
    image: '/add-outline.svg',
    label: 'La persona que se quiere suicidar no lo dice.',
    description: '',
    content: 'Solamente un pequeño número de suicidios se produce sin aviso. De cada 10 personas que se suicidan, 9 lo expresaron claramente o dejaron entrever sus intenciones de acabar con su vida.Todas las amenazas de autolesión deben ser tomadas en serio. Por eso, si detectás una señal de alerta directa o indirecta y creés que la persona que te preocupa se encuentra en una situación de riesgo, es importante que le preguntes sobre ello.',
  },

  {
    id: '4',
    image: '/add-outline.svg',
    label: 'El suicidio es impulsivo y la mayoría de los suicidas no avisa.',
    description: '',
    content: 'El suicidio puede ser el resultado de un acto impulsivo repentino o de una planificación muy cuidadosa. En ambos casos, casi siempre existen señales directas o indirectas, mensajes, gestos que advierten el riesgo de un intento de suicidio.Es erróneo pensar que no podemos hacer nada para prevenir la conducta suicida. El suicidio y/o sus intentos, en muchas ocasiones, se pueden prevenir y es por ello muy importante que aprendamos a detectar las señales de alerta de riesgo.',
  },

  {
    id: '5',
    image: '/add-outline.svg',
    label: 'Solo las personas con problemas graves se suicidan.',
    description: '',
    content: 'El suicidio es multicausal. Muchos problemas pequeños pueden llevar al suicidio. Nunca menosprecies ni compares. Lo que para algunos puede ser un problema simple o sin importancia, para otros puede ser algo catastrófico.',
  },

  {
    id: '6',
    image: '/add-outline.svg',
    label: 'Los suicidas solo desean morir y nadie puede sacarles esa idea.',
    description: '',
    content: 'Es muy frecuente que presenten sentimientos ambivalentes al respecto. Es decir deseos de vivir y morir a la vez, temor a la muerte, mínima esperanza de que algo cambie. Por eso siempre hay que acercarse a alguien que está en crisis para ofrecer ayuda.',
  },

  {
    id: '7',
    image: '/add-outline.svg',
    label: 'La mejoría inmediata después de una crisis suicida significa que salió del riesgo',
    description: '',
    content: 'Casi la mitad de las personas que atravesaron una crisis suicida o cometen suicidio, lo llevaron a cabo dentro de los tres primeros meses donde se creía que la crisis había pasado. Cuando tras un periodo de crisis en el que ocurrió algún evento desencadenante (por ej. la muerte de un ser querido), la persona muestra de repente una mejoría, esto puede indicar que ha elaborado un plan para quitarse la vida. Puede ser un momento de riesgo inminente.',
  },

  {
    id: '8',
    image: '/add-outline.svg',
    label: 'Las personas con conductas autodestructivas solamente lo hacen para llamar la atención.',
    description: '',
    content: 'Todo comportamiento autodestructivo es grave y puede ser letal, por lo que debe tomárselo muy seriamente y brindarle ayuda profesional. Nunca debe desestimarse. Se trata de una persona que está sufriendo y necesita ayuda.',
  },

  {
    id: '9',
    image: '/add-outline.svg',
    label: 'El suicidio se hereda',
    description: '',
    content: 'No se hereda, puede que se imite un comportamiento o que se herede la predisposición a desarrollar algún padecimiento en el que el suicidio pueda ocurrir, como esquizofrenia y la bipolaridad.',
  },
];


function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export default function Faq() {
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{
    setItems(charactersList)
    console.log(charactersList)
  }, [])

  return (
    <Accordion chevronPosition="right" variant="contained">{
      items.length > 0 && (
        items.map((item) => (
          <Accordion.Item value={item.id} key={item.label}>
            <Accordion.Control>
              <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">{item.content}</Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))
      )  
    }</Accordion>
    );
}
