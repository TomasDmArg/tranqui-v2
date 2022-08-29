import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export default function AuthenticationTitle() {
    return (    
      <Container size={420} my={40}>
        <Title
          align="center"
        >
        Bienvenido a Tranqui
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          No tenes cuenta todavia?{' '}
          <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Crear cuenta    
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="nombre@dominio.com" required />
          <PasswordInput label="Password" placeholder="Tu contraseña" required mt="md" />
          <Group  position="apart" mt="md">
            <Checkbox label="Recuérdame" />
            <Anchor href="forgot" size="sm" onClick={(event) => event.preventDefault()}>
              Olvidaste tú contraseña?
            </Anchor>
          </Group>
          <Button className='control1' fullWidth mt="xl">
            Iniciar sesión
          </Button>
        </Paper>
      </Container>
    );
  }