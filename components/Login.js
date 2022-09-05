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
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import React from "react";
import { IoCheckmarkCircleOutline, IoCheckmarkOutline, IoCloseCircleOutline } from "react-icons/io5";
export default function Auth() {
  const [email, setEmail] = useState("");
  const [loginState, setLoginState] = useState(0);
  const handleLogin = async (email) => {
    try {
      setLoginState(1);
      const { error } = await supabase.auth.signIn({ email: email });
      if (error) {
        throw error;
      }else{
        setLoginState(2);
      }
    } catch (error) {
      setLoginState(3);
    }
  };



  return (
    <Container size={420} my={40}>
      <Title align="center">Bienvenido a Tranqui</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Registrate o accedé a tu cuenta de Tranqui{" "}
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md" style={loginState == 2 ? {
        backgroundColor: '#45FFBD',
      } : {}}>
        {
          loginState === 0 && (
            <React.Fragment>
              <TextInput
                label="Email"
                placeholder="nombre@dominio.com"
                required
                onChange={(event) => setEmail(event.currentTarget.value)}
                value={email}
              />
              <Button
                className="control1"
                fullWidth
                mt="xl"
                onClick={() => handleLogin(email)}
              >
                Iniciar sesión
              </Button>
            </React.Fragment>
        )}
        {
          loginState === 1 && (
            <Group>
              <Loader/>
              <Text color="dimmed" size="sm" align="center" mt={5}> 
                Enviando email de verificación...
              </Text>
            </Group>
        )}
        {
          loginState === 2 && (
            <Group>
              <IoCheckmarkCircleOutline size={40} color="#171717"/>
              <Text color="#171717" size="md" align="center" mt={5}>
                Email enviado!
              </Text>
            </Group>
        )}
        {
          loginState === 3 && (
            <Group>
              <IoCloseCircleOutline size={40} color="#171717"/>
              <Text color="dimmed" size="sm" align="center" mt={5}>
                Error al enviar el email de verificación
              </Text>
            </Group>
        )}
      </Paper>
    </Container>
  );
}
