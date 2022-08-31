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
  import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email: "info@tmdm.com.ar" });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
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
          <TextInput label="Email" placeholder="nombre@dominio.com" required 
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <Button className='control1' fullWidth mt="xl" onClick={
            () => handleLogin(email)
          }>
            Iniciar sesión
          </Button>
        </Paper>
      </Container>
    );
  }