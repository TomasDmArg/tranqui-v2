import { Modal, Button, Text, Group } from "@mantine/core";
import React from "react";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

export default function ModalExample({ open }) {
  const [opened, setOpened] = React.useState(false);
  return (
    <React.Fragment>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
        style={{ marginBottom: -10 }}
        className="modal1"
        overlayOpacity={0.55}
        overlayBlur={3}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
      >
        <section className="modal1__content">
          <h2>¿Te encontras en crisis?</h2>
          <Group>
            <Button
              variant="filled"
              onClick={() => setOpened(false)}
              className="control1"
            >
              <IoCheckmarkOutline size={20} style={{ marginRight: "10px" }} />{" "}
              Estoy en crisis
            </Button>
            <Button
              variant="filled"
              onClick={() => setOpened(false)}
              className="control2"
            >
              <IoCloseOutline size={20} style={{ marginRight: "10px" }} /> No
              estoy en crisis
            </Button>
          </Group>
        </section>
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
