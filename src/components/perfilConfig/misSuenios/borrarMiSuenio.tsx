import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const BorrarMiSuenio = ({ idSuenio }: { idSuenio: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        color="danger"
        variant="ghost"
        startContent={<ClearIcon />}
        onClick={onOpen}
      >
        Borrar
      </Button>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Borrar sueño permanentemente
              </ModalHeader>
              <ModalBody>
                <p>
                  ¿Estas segur@ que quieres borrar este post? No podras
                  recuperarlo luego.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No, cancelar.
                </Button>
                <Button color="primary" onPress={onClose}>
                  Si, borrar para siempre.
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BorrarMiSuenio;
