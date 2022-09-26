import React from "react";
import { Group, Avatar, Text, Accordion } from "@mantine/core";

function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="sm" />
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
  return (
    <Accordion chevronPosition="right" variant="contained">
      <Accordion.Item value="0">
        <Accordion.Control>
          <AccordionLabel
            label="Factores precipitantes"
            image="/add-outline.svg"
            id={3}
          />
        </Accordion.Control>
        <Accordion.Panel>
          {/* Donde van los elementos */}
          
          <Accordion chevronPosition="right" variant="contained">
            <Accordion.Item value="0">
              <Accordion.Control>
                <AccordionLabel
                  label="Comunes a todas las edades"
                  image="/add-outline.svg"
                  id={3}
                />
              </Accordion.Control>
              <Accordion.Panel>
                {/* Donde van los elementos */}
                <li>Accidentes o diagnóstico, empeoramiento o crisis de enfermedades graves, incapacitantes o dolorosas. Propias o ajenas.</li>
                <li>Desastres naturales.</li>
                <li>Pérdida de seres queridos (incluidos animales de compañía).</li>
                <li>Existencia de entorno suicida: fácil acceso a medios letales, epidemias suicidas, suicidio de familiares o personas cercanas, acceso a información y relaciones inadecuadas en medios de información, comunicación y redes sociales etc.</li>
                <li>Experiencias y vivencias traumáticas: agresiones y malos tratos, acosos y humillaciones, abusos sexuales, etc.</li>
                <li>Aumento o consumo de sustancias tóxicas.</li>
                <li>Estado de embriaguez o intoxicación.</li>
                <li>Imputaciones o condenas judiciales.</li>
                <li>Disputas y conflictos con familiares o personas cercanas.</li>
                <li>Embarazo no deseado o aborto.</li>
                <li>Cambios vitales bruscos no deseados.</li>
                <li>Efectos secundarios suicidógenos de medicaciones.</li>
                <li>Alta por hospitalización psiquiátrica (primera semana).</li>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Accordion chevronPosition="right" variant="contained">
            <Accordion.Item value="0">
              <Accordion.Control>
                <AccordionLabel
                  label="Adolescentes y jovenes"
                  image="/add-outline.svg"
                  id={3}
                />
              </Accordion.Control>
              <Accordion.Panel>
                {/* Donde van los elementos */}
                <li>Fracaso escolar. Problemas disciplinarios escolares. Presión escolar. Períodos de exámenes.</li>
                <li>Bullying, acoso, humillaciones, malos tratos.</li>
                <li>Abuso sexual. Violaciones.</li>
                <li>Discriminación y exclusión por la orientación sexual y/o su identidad de género.</li>
                <li>Separación o pérdida de amigxs y compañerxs. Cambios habituales de residencia y de entorno social.</li>
                <li>Desengaño amoroso.</li>
                <li>Muerte de un ser querido.</li>
                <li>Entorno suicida. Presión para cometer suicidio.</li>
                <li>Embarazo adolescente.</li>
                <li>Separación de los padres o graves conflictos conyugales, con instrumentalización del hijo. Violencia en el círculo familiar.</li>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Accordion chevronPosition="right" variant="contained">
            <Accordion.Item value="0">
              <Accordion.Control>
                <AccordionLabel
                  label="Adultos"
                  image="/add-outline.svg"
                  id={3}
                />
              </Accordion.Control>
              <Accordion.Panel>
                {/* Donde van los elementos */}
                <li>Fracaso profesional.</li>          
                <li>Pérdida de empleo (primer año) o dificultades económicas.</li>          
                <li>Pérdida de estatus o prestigio social.</li>          
                <li>Ruptura conyugal, desengaño amoroso.</li>          
                <li>Jubilación.</li>          
                <li>Alcoholismo</li>          
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Accordion chevronPosition="right" variant="contained">
            <Accordion.Item value="0">
              <Accordion.Control>
                <AccordionLabel
                  label="Adultos mayores"
                  image="/add-outline.svg"
                  id={3}
                />
              </Accordion.Control>
              <Accordion.Panel>
                {/* Donde van los elementos */}
                <li>Empeoramiento de enfermedades, aumento del dolor, fracaso, hartazgo, aumento de la dependencia. Pérdida de funciones físicas o psicológicas básicas.</li>
                <li>Institucionalización. Etapa de adaptación a un hogar de ancianos.</li>
                <li>Malos tratos.</li>
                <li>Cambio periódico de domicilio.</li>
                <li>Viudez (especialmente el primer año).</li>
                <li>Sentimientos de soledad e inutilidad. Inactividad.</li>
                <li>Pérdida de interés por la vida.</li>
                <li>Pérdida de la fe.</li>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
