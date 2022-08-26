import { createStyles, Title, Text, Button, Container } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { Dots } from '../components/Dots';
import { HeaderResponsive } from '../components/Header';
import React from 'react';
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
  control1: {
    backgroundColor: '#45FFBD',
    color: '#000',
    '&:hover': {
      backgroundColor: '#45FFBD',
    },
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function HeroText() {
  const { classes } = useStyles();

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
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            <Image
              src="/logo.svg"
              alt="Mantine"
              width={268}
              height={97}
              style={{ marginBottom: -10 }}
            />
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              ¿Estás pasando por una crisis? Tranqui, te ayudamos a superarla.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control1} size="lg">
              Necesito ayuda
            </Button>
            <Button className={classes.control} size="lg" variant="default" color="gray">
              Conozco a alguien
            </Button>
          </div>
          <div className={classes.controls}>
            <Button className={classes.control} size="lg" variant="subtle" color="gray">
              Mas información
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}