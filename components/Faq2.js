import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
    {
        id: '1',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Factores protectores.',
        description: '',
        content: (<ul>
            <li>Buena autoestima</li>
            <li>Percepción de contar con una red social de apoyo</li>
            <li>Buena comunicación familiar</li>
            <li>Sentimiento de pertenencia</li>
            <li>Buena regulación emocional</li>
            <li>Sensación de autocontrol</li>
            <li>Capacidad para la resolución de problemas</li>
            <li>Perspectiva optimista respecto del futuro</li>
            <li>Flexibilidad</li>
        </ul>),
      },

      {
        id: '2',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'factores de riesgo',
        description: '',
        content: (<ul>
            <li>Baja autoestima</li>
            <li>Sentimientos de soledad y aislamiento, de estar atrapado</li>
            <li>Percepción de ser una carga para los demás</li>
            <li>Dificultades en la regulación emocional</li>
            <li>Impulsividad</li>
            <li>Dificultades en la resolución de problemas</li>
            <li>Percepción de falta de apoyo social</li>
            <li>Perspectiva pesimista respecto del futuro</li>
            <li>Autolesiones no suicidas</li>
            <li>Presencia de cuadro psicopatológico (en especial: depresión mayor, trastorno bipolar, esquizofrenia, trastorno límite de personalidad)</li>
        </ul>),
      },

      {
        id: '3',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Factores precipitantes',
        description: '',
        content: (<ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>),
      },

      {
        id: '4',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Dimensiones suicidológicas',
        description: '',
        content: (<ul>
            <li>Ideación suicidas: presencia, contenido, intensidad, frecuencia, duración.</li>
            <li>Plan suicida: grado de planeación vinculado a cómo llevarlo a cabo.</li>
            <li>Intento previo: presencia, método utilizado, circunstancias que rodearon el acto.</li>
            <li>Antecedentes en la familia y/o entorno social próximo.</li>
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
  