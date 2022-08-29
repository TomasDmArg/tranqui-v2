import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
    {
        id: '1',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Lugares donde asistir',
        description: '',
        content: (<ul>
            <li><a href="atencion.pdf">Atención de las urgencias en salud mental</a></li>
            <li><a href="dispositivos.pdf">Dispositivos de Atención de salud mental</a></li>
        </ul>),
      },
]
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
  