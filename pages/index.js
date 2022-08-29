import { createStyles, Title, Text, Button, Container } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { Dots } from '../components/Dots';
import { HeaderResponsive } from '../components/Header';
import React from 'react';
import { useRouter } from "next/router";
export default function HeroText() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Tranqui</title>
      </Head>
      <HeaderResponsive links={
        [
          { link: '/login', label: 'Iniciar sesión' },
          { link: '/register', label: 'Registrarse' },
          { link: '/professionals', label: 'Para profesionales' },
        ]
      } />
      <Container className="wrapper" size={1400}>
        <Dots className="dots" style={{ left: 0, top: 0 }} />
        <Dots className="dots" style={{ left: 60, top: 0 }} />
        <Dots className="dots" style={{ left: 0, top: 140 }} />
        <Dots className="dots" style={{ right: 0, top: 60 }} />

        <div className="inner">
          <Title className="title">
            <Image
              src="/logo.svg"
              alt="Mantine"
              width={268}
              height={97}
              style={{ marginBottom: -10 }}
            />
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className="description">
              ¿Estás pasando por una crisis? Tranqui, te ayudamos a superarla.
            </Text>
          </Container>

          <div className="controls">
            <Button className="control1" size="lg">
              Necesito ayuda
            </Button>
            <Button className="control" size="lg" variant="default" color="gray">
              Conozco a alguien
            </Button>
          </div>
          <div className="controls">
            <Button className="control" size="lg" variant="subtle" color="gray"
              onClick={()=> router.push("/masinfo")}
            >
              Mas información
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}