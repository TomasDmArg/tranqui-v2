import { useState } from "react";
import { createStyles, Navbar, Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  UserCircle,
  IconLogout,
  IconMusic,
  IconUserCircle,
} from "@tabler/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import { supabase } from "../../utils/supabaseClient";
const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      height: '100vh',
      backgroundColor: "#4242ff",
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.1
      )}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.1
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "        flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: "#45FFBD",
        color: "#171717"
      },
      "&:hover > .linkIcon": {
        color: "#171717"
      },
    },

    linkIcon: {
      ref: icon,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: "#45FFBD",
        color: "#171717",
        [`& .${icon}`]: {
            color: "#171717",
          opacity: 0.9,
        },
      },
    },
  };
});

const data = [
  { link: "", label: "Mi musica", icon: IconMusic },
  { link: "", label: "Mis datos", icon: IconUserCircle },
];

export function DashboardNav({selectedLink}) {
  const router = useRouter();

  const { classes, cx } = useStyles();
  const [active, setActive] = useState(selectedLink);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image
            src="/logo-dark.svg"
            alt="Mantine"
            width={134 * 1.5}
            height={51 * 1.5}
            style={{ marginBottom: -10, marginLeft: 10 }}
          />
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <div
          className={classes.link}
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Cerrar sesión</span>
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
