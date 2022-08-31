import React from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
    {
        id: '1',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Factores Protectores.',
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
        label: 'factores de Riesgo',
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
        label: 'Factores Precipitantes',
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
        id: '4',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Preguntar a una persona si está pensando en suicidarse, puede incitarle a hacerlo.',
        description: '',
        content: `
            /-Ejempl
            {
              -> ahindsojd
              -> iaspfips
            }
        `,
    },
]
// content: "Está demostrado que preguntar y hablar con la persona sobre la presencia de pensamientos suicidas, disminuye el riesgo de cometer el acto. Hablar siempre genera alivio en la persona que está sufriendo.Es muy importante acercarse con una actitud de comprensión y de escucha, para que sienta tu deseo de ayudar y tu preocupación. No intentes discutir o minimizar estas ideas. Dejalx hablar de lo que le pasa.",
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
    const getHTML = (content) => {
      // If content line starts with "/-" it's the title
      // If content line is {
      // If content line starts with "->" it's a list item
      // If content line starts with "{" it's the end of the list
      // If content line starts with "}" it's the end of the list
      let html = "";
      let list = false;
      let title = false;
      let listItems = [];
      content.split("\n").forEach((line) => {
        line = line.trim();
        if (line.startsWith("/-")) {
          title = true;
          line = line.replace("/-", "");
        }
        if (line.startsWith("{")) {
          list = true;
          line = line.replace("{", "");
        }
        if (line.startsWith("}")) {
          list = false;
          line = line.replace("}", "");
        }
        if (line.startsWith("->")) {
          listItems.push(line.replace("->", ""));
          line = line.replace("->", "");
        }
        if (title) {
          html += `<h3>${line}</h3>`;
          title = false;
        }
        if (list) {
          html += `<ul>`;
          listItems.forEach((item) => {
            html += `<li>${item}</li>`;
          });
          html += `</ul>`;
        }
        if (!list && !title) html += `<p>${line}</p>`;
      });
      return html;
    }
    return (
      <Accordion chevronPosition="right" variant="contained">{
        items.length > 0 && (
          items.map((item) => (
            <Accordion.Item value={item.id} key={item.label}>
              <Accordion.Control>
                <AccordionLabel {...item} />
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">{typeof item.content == "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: getHTML(item.content) }} />
                ) : item.content}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))
        )  
      }</Accordion>
      );
  }
  