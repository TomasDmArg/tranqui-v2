import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'preguntar a una persona si está pensando en suicidarse, puede incitarle a hacerlo.',
    description: '',
    content: "Está demostrado que preguntar y hablar con la persona sobre la presencia de pensamientos suicidas, disminuye el riesgo de cometer el acto. Hablar siempre genera alivio en la persona que está sufriendo.Es muy importante acercarse con una actitud de comprensión y de escucha, para que sienta tu deseo de ayudar y tu preocupación. No intentes discutir o minimizar estas ideas. Dejalx hablar de lo que le pasa.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
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
