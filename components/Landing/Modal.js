import { Modal, Button, Text } from "@mantine/core";
import React from "react";

export default function ModalExample({ open }) {
  const [opened, setOpened] = React.useState(false);
  return (
    <React.Fragment>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Modal title"
				size="77%"
				style={{ marginBottom: -10 }}
				overlayOpacity={0.55}
				overlayBlur={3}
				transition="fade"
				transitionDuration={600}
				transitionTimingFunction="ease"
      >
        <Text size="lg" style={{ padding: 20 }}>
          Modal content
        </Text>
      </Modal>
      <div className="controls">
        <Button className="control1" size="lg" onClick={() => setOpened(true)}>
          Necesito ayuda
        </Button>
        <Button
          className="control"
          size="lg"
          variant="default"
          color="gray"
          onClick={() => router.push("/conozco")}
        >
          Conozco a alguien
        </Button>
      </div>
    </React.Fragment>
  );
}
