import { createStyles, Title, Text, Button, Container } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { Dots } from "../components/Dots";
import { HeaderResponsive } from "../components/Header";
import React from "react";
import { useRouter } from "next/router";
import HelpModal from "../components/Landing/Modal";
import { supabase } from "../utils/supabaseClient";
import { IoExit, IoExitOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function HeroText() {
  const router = useRouter();
  const [session, setSession] = React.useState(null);

  React.useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Tranqui</title>
      </Head>
      {session ? (
        <HeaderResponsive
          links={[
            { label: "Para profesionales", link: "/professionals" },
            { label: (<IoPersonCircleOutline size={25}/>), link: "/perfil" },
            { label: (<IoExitOutline size={25}/>), link: "/signout" },
          ]}
        />
      ) : (
        <HeaderResponsive
          links={[
            { link: "/login", label: "Registrarse/Iniciar sesión" },
            { link: "/professionals", label: "Para profesionales" },
          ]}
        />
      )}
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
          </Container>

          <HelpModal />
          <div className="controls">
            <Button
              className="control"
              size="lg"
              variant="subtle"
              color="gray"
              onClick={() => router.push("/masinfo")}
            >
              Mas información
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
