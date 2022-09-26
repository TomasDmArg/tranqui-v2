import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
    {
        id: '1',
        image: '/add-outline.svg',
        label: 'Factores Protectores.',
        description: '',
        content: (<ul>
            <li>Cambios bruscos en los hábitos de comer y dormir.</li>
            <li>Cambios repentinos en el estado de ánimo.</li>
            <li>Falta de reacción ante frecuentes agresiones del entorno social.</li>
            <li>Retraimiento de sus amigos, familiares o actividades habituales.</li>
            <li>Poco interés hacia actividades que antes le resultaban divertidas o agradables.</li>
            <li>Disminución del rendimiento en las actividades escolares o laborales.</li>
            <li>Despreocupación por el aspecto personal.</li>
            <li>Frecuente de desvaloración (se tiran abajo).</li>
            <li>Fantasías de dormirse y no despertar.</li>
            <li>Sentimientos de desesperanza y desilusión frecuentes.</li>
            <li>Sentimientos de desesperación y culpa.</li>
            <li>Problemas afectivos y dificultades en su comunicación.</li>
            <li>Pérdidas recientes e importantes: afectivas o de status.</li>
            <li>Obsesión con la muerte o pensamientos recurrentes en torno a ella.</li>
            <li>Presencia de deseos de muerte o fantasías de autodestrucción.</li>
            <li>Comportamiento autodestructivo. Intentos previos.</li>
            <li>Proferir amenazas suicidas a amigos, familiares u otras personas o mediante post en las redes sociales.</li>
            <li>Repartir objetos muy queridos.</li>
            <li>Realización de escritos de despedida.</li>
            <li>Organización de reuniones de despedida.</li>
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
  